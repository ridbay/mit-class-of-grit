import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/a666e593534c4829ee71efd4c87a446d6ecb1e5140ea13b27847730feaa2810f.sqlite"
  }
});
