import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/1034467c4ba4d6a26c203daea8546b43284aec3d424dc753bba2981d5d998f67.sqlite"
  }
});
