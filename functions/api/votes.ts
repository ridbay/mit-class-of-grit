import { drizzle } from "drizzle-orm/d1";
import { eq, or, and } from "drizzle-orm";
import { votes, vote_logs } from "../../src/db/schema";

export interface Env {
  DB: D1Database;
  JWT_SECRET?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);
  
  try {
    const authHeader = context.request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const [payloadBase64, signatureBase64] = token.split(".");

    // Verify token signature
    const secretStr = context.env.JWT_SECRET || "fallback-secret-for-dev-only";
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secretStr),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    let signatureArray;
    try {
      const signatureStr = atob(signatureBase64.replace(/-/g, "+").replace(/_/g, "/"));
      signatureArray = new Uint8Array(signatureStr.length);
      for (let i = 0; i < signatureStr.length; i++) {
        signatureArray[i] = signatureStr.charCodeAt(i);
      }
    } catch(e) {
      return Response.json({ error: "Invalid token format" }, { status: 401 });
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureArray,
      encoder.encode(payloadBase64)
    );

    if (!isValid) {
      return Response.json({ error: "Invalid token signature" }, { status: 401 });
    }

    const payload = JSON.parse(atob(payloadBase64));
    
    if (payload.exp < Date.now()) {
      return Response.json({ error: "Token expired" }, { status: 401 });
    }

    const matric = payload.matric;

    // Get voting payload
    const body = await context.request.json() as { fingerprint?: string, selections: any };
    const ip = context.request.headers.get("CF-Connecting-IP") || "unknown-ip";
    const fingerprint = body.fingerprint || "unknown-fingerprint";

    // Check if IP or Fingerprint has already voted
    // If we want strict "one vote per IP AND one vote per browser"
    const existingLogs = await db.select().from(vote_logs).where(
      or(
        eq(vote_logs.ip_address, ip),
        eq(vote_logs.browser_fingerprint, fingerprint)
      )
    ).limit(1);

    if (existingLogs.length > 0 && existingLogs[0].student_matric !== matric) {
        // Someone else already voted from this IP or browser
        // If they are voting again for the *same* matric, we allow it (it's an update)
        return Response.json({ error: "A vote has already been cast from this device or network." }, { status: 403 });
    }

    // Check if they already voted (update or insert)
    const existingVote = await db.select().from(votes).where(eq(votes.student_matric, matric)).limit(1);

    if (existingVote.length > 0) {
      // Update existing vote
      await db.update(votes).set({
        selections: body.selections
      }).where(eq(votes.student_matric, matric));
    } else {
      // Insert new vote and log the device
      await db.insert(votes).values({
        id: crypto.randomUUID(),
        student_matric: matric,
        selections: body.selections,
        created_at: new Date()
      });

      await db.insert(vote_logs).values({
        id: crypto.randomUUID(),
        ip_address: ip,
        browser_fingerprint: fingerprint,
        student_matric: matric,
        created_at: new Date()
      });
    }

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json({ error: "Server error", details: err.message }, { status: 500 });
  }
};
