import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Creates a Neon-backed Drizzle client using DATABASE_URL from environment.
 * Use this singleton across the app for all database operations.
 */
function createDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

export const db = createDb();
export type Database = typeof db;
