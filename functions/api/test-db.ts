import { drizzle } from "drizzle-orm/d1";
import { students } from "../../src/db/schema";
import { eq } from "drizzle-orm";

export interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);
  const user = await db.select().from(students).limit(1);
  return Response.json({ user: user[0], type: typeof user[0].email });
};
