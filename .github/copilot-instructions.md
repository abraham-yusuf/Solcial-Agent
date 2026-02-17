# GitHub Copilot Instructions for OnchainSocial AI

These instructions are the **primary guiding rules** for all code suggestions in this repository. Follow them strictly — override any default Copilot behavior or outdated patterns.

## Project Context
- Full-stack Solana dApp: Next.js 15 (App Router) frontend + Anchor Rust smart contracts + Solder/Drizzle/PostgreSQL indexer + ElizaOS + OpenClaw AI agents + x402 micropayments.
- Hackathon MVP focus: Graveyard Hackathon 2026 – Onchain Social track.
- Goal: Clean, type-safe, demo-ready code for 3-minute video submission by Feb 27, 2026.
- Read these files first for context (in order of priority):
  1. docs/PRD.md
  2. docs/ARCHITECTURE.md
  3. docs/MVP.md
  4. docs/TECH_STACK.md
  5. README.md

## General Coding Rules
- Always use **TypeScript** (strict mode enabled in tsconfig.json).
- Prefer **functional components** + server components in Next.js App Router.
- Use **server actions** for mutations (e.g., create post, like) instead of client-side API routes when possible.
- No class components unless absolutely required.
- Follow **Clean Code** principles: small functions, single responsibility, descriptive names.
- Use **early returns** instead of deep nesting.
- Add JSDoc comments for public functions/hooks/components (brief but useful).
- Error handling: Use try/catch + toast notifications (implement simple toast util if needed).
- No console.log in production code — use debug logs or remove.

## Naming & Style Conventions
- Files & folders: kebab-case for folders (e.g., post-card), PascalCase for components (PostCard.tsx).
- Variables/functions: camelCase.
- Constants: UPPER_SNAKE_CASE.
- Interfaces/Types: PascalCase with 'I' prefix only if needed (prefer descriptive names without prefix).
- Anchor instructions: snake_case (Rust convention).
- Use **Tailwind CSS** exclusively for styling — no CSS modules, styled-components, or Emotion.
- Tailwind classes: Group by category (layout → spacing → typography → colors → etc.), one per line if long.

## Folder & Import Rules
- Respect the exact structure in ARCHITECTURE.md — do NOT suggest new top-level folders without reason.
- Imports:
  - Use relative imports for local files (e.g., ../../lib/solana).
  - Alias imports if configured in tsconfig (e.g., @/components, @/lib).
  - Group imports: external → internal → local.
- Components → src/components/ (Atomic Design: atoms → molecules → organisms).
- Agent logic → src/agents/ (separate ElizaOS and OpenClaw subfolders).
- DB & queries → src/db/ (schema, queries, migrations).
- Solana utils → src/lib/solana/ and src/lib/anchor/.

## Solana & Anchor Specific Rules
- Always use Anchor's generated client/IDL for program interactions (import from anchor/target/idl).
- Use ProgramDerivedAddress (PDA) for accounts.
- Transactions: Use VersionedTransaction when needed; prefer Anchor's methods.
- Wallet: Use @solana/wallet-adapter-react for connection/context.
- Never hardcode program ID — use env var or constant from Anchor deploy.
- Signers: Agent actions must use a dedicated dev wallet keypair (from env).

## AI Agents (ElizaOS + OpenClaw)
- ElizaOS: Use persistent memory backed by Drizzle/PostgreSQL (src/db/schema/agent_memory.ts).
- OpenClaw: Implement autonomous loops as async functions with setInterval or cron-like.
- Agents should NOT block main thread — run in background (Node.js script or server action).
- LLM calls: Use simple prompt templates; assume Grok/OpenAI-compatible API (env var for key).
- Autonomous actions: Always validate before on-chain execution (e.g., check balance, rate limit).

## Database & Solder
- Use **Drizzle ORM** exclusively for PostgreSQL queries (no raw SQL unless escaping needed).
- Schema: Defined in src/db/schema/ and mirrored in solder/schema.ts.
- Queries: Write reusable functions in src/db/queries/ (e.g., getRecentPosts).
- Solder: Monitor Anchor events → insert/update via Drizzle handlers in solder/indexers/.

## x402 Payments
- Use x402-solana package or protocol spec directly.
- Implement simple tip function: sender → receiver micro-amount (0.0005–0.001 SOL).
- Show tx signature in UI after success.

## Security & Best Practices
- Never commit .env files or private keys.
- Use env vars for: RPC_URL, DATABASE_URL, AGENT_WALLET_PRIVATE_KEY (dev only).
- Sanitize user inputs (text posts max 280 chars).
- Rate limit agent actions to avoid spam on Devnet.

## Prohibited Patterns
- Do NOT use:
  - useEffect for data fetching (prefer server components or React Query if needed later).
  - Global state (Redux/Zustand) — use React Context only if absolutely necessary.
  - External UI libraries (Shadcn ok if already installed, but prefer pure Tailwind).
  - Deprecated Solana patterns (e.g., old Connection methods).
- Do NOT add new dependencies without updating TECH_STACK.md and package.json.

## Commit Message Style
- Conventional Commits: feat:, fix:, refactor:, docs:, chore:
- Example: feat: implement createPost Anchor instruction

Follow these rules in every suggestion. If something conflicts with the docs/PRD/MVP, prioritize the documents over default Copilot behavior.

Happy hacking — let's win this hackathon! 🚀
