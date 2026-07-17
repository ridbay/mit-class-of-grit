import { drizzle } from "drizzle-orm/d1";
import { eq, or, and } from "drizzle-orm";
import { votes, vote_logs } from "../../src/db/schema";
import { UAParser } from "ua-parser-js";

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
    if (!token || token === "null" || !token.includes(".")) {
      return Response.json({ error: "Invalid token format" }, { status: 401 });
    }
    
    const [payloadBase64, signatureBase64] = token.split(".");

    if (!payloadBase64 || !signatureBase64) {
      return Response.json({ error: "Invalid token format" }, { status: 401 });
    }

    // Verify token signature
    const secretStr = context.env.JWT_SECRET || "fallback-secret-for-dev-only";
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secretStr),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );

    let signatureArray;
    try {
      let base64 = signatureBase64.replace(/-/g, "+").replace(/_/g, "/");
      while (base64.length % 4) {
        base64 += "=";
      }
      const signatureStr = atob(base64);
      signatureArray = new Uint8Array(signatureStr.length);
      for (let i = 0; i < signatureStr.length; i++) {
        signatureArray[i] = signatureStr.charCodeAt(i);
      }
    } catch (e) {
      return Response.json({ error: "Invalid token format" }, { status: 401 });
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureArray,
      encoder.encode(payloadBase64),
    );

    if (!isValid) {
      return Response.json(
        { error: "Invalid token signature" },
        { status: 401 },
      );
    }

    const payload = JSON.parse(atob(payloadBase64));

    if (payload.exp < Date.now()) {
      return Response.json({ error: "Token expired" }, { status: 401 });
    }

    const matric = payload.matric;

    // Get voting payload
    const body = (await context.request.json()) as {
      fingerprint?: string;
      selections: any;
    };
    const ip = context.request.headers.get("CF-Connecting-IP") || "unknown-ip";
    const fingerprint = body.fingerprint || "unknown-fingerprint";

    const userAgent = context.request.headers.get("User-Agent") || "";
    const uap = new UAParser(userAgent);
    const device_info = {
      browser: uap.getBrowser(),
      os: uap.getOS(),
      device: uap.getDevice(),
      userAgent,
    };

    const location = {
      country: (context.request.cf as any)?.country,
      city: (context.request.cf as any)?.city,
      region: (context.request.cf as any)?.region,
      continent: (context.request.cf as any)?.continent,
    };

    const network = {
      asn: (context.request.cf as any)?.asn,
      asOrganization: (context.request.cf as any)?.asOrganization,
    };

    // Check IP or Fingerprint uniqueness to restrict one vote per device/IP
    const conditions = [];
    if (ip && ip !== "unknown-ip" && ip !== "127.0.0.1" && ip !== "::1") {
      conditions.push(eq(vote_logs.ip_address, ip));
    }
    if (fingerprint && fingerprint !== "unknown-fingerprint") {
      conditions.push(eq(vote_logs.browser_fingerprint, fingerprint));
    }

    if (conditions.length > 0) {
      const existingDeviceLog = await db
        .select()
        .from(vote_logs)
        .where(conditions.length === 1 ? conditions[0] : or(...conditions))
        .limit(1);
      if (existingDeviceLog.length > 0) {
        return Response.json(
          { error: "A vote has already been cast. Only one vote is allowed." },
          { status: 403 },
        );
      }
    }
    // Check if they already voted (update or insert)
    const existingVote = await db
      .select()
      .from(votes)
      .where(eq(votes.student_matric, matric))
      .limit(1);

    if (existingVote.length > 0) {
      return Response.json(
        {
          error:
            "You have already cast your votes. Multiple submissions are not allowed.",
        },
        { status: 403 },
      );
    } else {
      // Insert new vote and log the device
      await db.insert(votes).values({
        id: crypto.randomUUID(),
        student_matric: matric,
        selections: body.selections,
        created_at: new Date(),
      });
    }

    await db.insert(vote_logs).values({
      id: crypto.randomUUID(),
      ip_address: ip,
      browser_fingerprint: fingerprint,
      student_matric: matric,
      student_name: payload.name,
      device_info: device_info,
      location: location,
      network: network,
      created_at: new Date(),
    });

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json(
      { error: "Server error", details: err.message },
      { status: 500 },
    );
  }
};
