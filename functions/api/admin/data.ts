import { drizzle } from "drizzle-orm/d1";
import { votes, vote_logs, students } from "../../../src/db/schema";
import { desc } from "drizzle-orm";

export interface Env {
  DB: D1Database;
  VITE_ADMIN_USERNAME?: string;
  VITE_ADMIN_PASSWORD?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const authHeader = context.request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401, headers: { "WWW-Authenticate": 'Basic realm="Admin"' } }
      );
    }

    const base64 = authHeader.split(" ")[1];
    const decoded = atob(base64);
    const [username, password] = decoded.split(":");

    // Fallbacks just in case the .env is not bound properly in Cloudflare Pages Functions
    const expectedUser = context.env.VITE_ADMIN_USERNAME || "interroperability";
    const expectedPass = context.env.VITE_ADMIN_PASSWORD || "*Grit2026Cl@ss";

    if (username !== expectedUser || password !== expectedPass) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const db = drizzle(context.env.DB);

    const [nominations, deviceLogs, studentsList] = await Promise.all([
      db.select().from(votes).orderBy(desc(votes.created_at)),
      db.select().from(vote_logs).orderBy(desc(vote_logs.created_at)),
      db.select().from(students)
    ]);

    return Response.json({
      nominations,
      deviceLogs,
      students: studentsList
    });
  } catch (err: any) {
    return Response.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
};
