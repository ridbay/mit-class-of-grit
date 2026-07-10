import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const students = sqliteTable("students", {
  id: text("id").primaryKey(), // We can use UUIDs or matric numbers
  matric: text("matric").notNull().unique(),
  name: text("name").notNull(),
  email: text("email"),
});

export const votes = sqliteTable("votes", {
  id: text("id").primaryKey(),
  student_matric: text("student_matric").notNull().unique(),
  selections: text("selections", { mode: "json" }).notNull(), // JSON blob of votes
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const vote_logs = sqliteTable("vote_logs", {
  id: text("id").primaryKey(),
  ip_address: text("ip_address"),
  browser_fingerprint: text("browser_fingerprint"),
  student_matric: text("student_matric").notNull(),
  student_name: text("student_name"),
  device_info: text("device_info", { mode: "json" }),
  location: text("location", { mode: "json" }),
  network: text("network", { mode: "json" }),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
});
