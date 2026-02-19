import {
  pgTable,
  text,
  varchar,
  timestamp,
  serial,
  jsonb,
} from "drizzle-orm/pg-core";

/** Agent memory table — persistent storage for ElizaOS / OpenClaw agents. */
export const agentMemory = pgTable("agent_memory", {
  id: serial("id").primaryKey(),
  /** Agent identifier (e.g. "eliza-moderator", "openclaw-curator"). */
  agentId: varchar("agent_id", { length: 64 }).notNull(),
  /** Memory key for lookup. */
  key: varchar("key", { length: 128 }).notNull(),
  /** Stored value as JSON. */
  value: jsonb("value").notNull(),
  /** Timestamp when stored / last updated. */
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type AgentMemory = typeof agentMemory.$inferSelect;
export type NewAgentMemory = typeof agentMemory.$inferInsert;
