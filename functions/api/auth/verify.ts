import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { students, votes } from "../../../src/db/schema";

export interface Env {
  DB: D1Database;
  JWT_SECRET?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);

  try {
    const { matric, name, email } = (await context.request.json()) as {
      matric?: string;
      name?: string;
      email?: string;
    };

    if (!matric) {
      return Response.json(
        { error: "Matric number is required." },
        { status: 400 },
      );
    }

    // Query student by matric
    const studentRecords = await db
      .select()
      .from(students)
      .where(eq(students.matric, matric))
      .limit(1);
    const student = studentRecords[0];

    if (!student) {
      return Response.json(
        { error: "Student not found in database." },
        { status: 404 },
      );
    }

    if (name) {
      const nameParts = name.split(/\s+/).filter(Boolean);
      const dbName = student.name.toLowerCase();
      const nameMatches = nameParts.some((part) =>
        dbName.includes(part.toLowerCase()),
      );

      if (!nameMatches) {
        return Response.json(
          { error: "Name does not match our records." },
          { status: 400 },
        );
      }
    }

    if (email) {
      await db
        .update(students)
        .set({ email })
        .where(eq(students.matric, matric));
    }

    // Simple stateless token (HMAC SHA-256)
    const secretStr = context.env.JWT_SECRET || "fallback-secret-for-dev-only";
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secretStr),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    const payload = JSON.stringify({
      matric: student.matric,
      name: student.name,
      exp: Date.now() + 1000 * 60 * 60 * 24,
    }); // 24 hours
    const payloadBase64 = btoa(payload);
    const signature = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(payloadBase64),
    );

    // Convert signature to base64url
    const signatureArray = Array.from(new Uint8Array(signature));
    const signatureBase64 = btoa(
      String.fromCharCode.apply(null, signatureArray),
    )
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const token = `${payloadBase64}.${signatureBase64}`;

    const existingVote = await db.select().from(votes).where(eq(votes.student_matric, student.matric)).limit(1);
    const hasVoted = existingVote.length > 0;

    return Response.json({
      success: true,
      token,
      student: {
        matric: student.matric,
        name: student.name,
      },
      hasVoted,
    });
  } catch (err: any) {
    return Response.json(
      { error: "Server error", details: err.message },
      { status: 500 },
    );
  }
};
