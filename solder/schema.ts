/**
 * Solder schema mirror — re-exports Drizzle schema for use in Solder indexers.
 * Keeps solder/ in sync with src/db/schema/ without duplication.
 */
export {
  profiles,
  posts,
  notifications,
  agentMemory,
} from "../src/db/schema";

export type {
  Profile,
  NewProfile,
  Post,
  NewPost,
  Notification,
  NewNotification,
  AgentMemory,
  NewAgentMemory,
} from "../src/db/schema";
