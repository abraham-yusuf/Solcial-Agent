import { Connection, clusterApiUrl } from "@solana/web3.js";
import { SOLANA_RPC_URL, SOLANA_NETWORK } from "../constants";

/**
 * Creates a Solana JSON-RPC connection.
 * Falls back to the public devnet endpoint when env var is not set.
 */
export function getConnection(): Connection {
  const endpoint = SOLANA_RPC_URL || clusterApiUrl(SOLANA_NETWORK);
  return new Connection(endpoint, "confirmed");
}
