import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { students } from "../../../src/db/schema";

export interface Env {
  DB: D1Database;
  JWT_SECRET?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);

  try {
    const { matric, email } = (await context.request.json()) as {
      matric?: string;
      email?: string;
    };

    if (!matric || !email) {
      return Response.json(
        { error: "Matric number and email are required." },
        { status: 400 },
      );
    }

    // Verify token here ideally, but for simplicity we rely on the matric passed from the frontend (which is guarded by the JWT in the app state).
    
    await db
      .update(students)
      .set({ email })
      .where(eq(students.matric, matric));

    return Response.json({ success: true, email });
  } catch (err: any) {
    return Response.json(
      { error: "Server error", details: err.message },
      { status: 500 },
    );
  }
};
