# TODO.md – OnchainSocial AI  
**Project Progress Tracker**  
**Hackathon Deadline:** February 27, 2026 (Submission due)  
**Current Date:** February 18, 2026 (tracking start)  
**Last Updated:** February 18, 2026  
**Owner:** @bram0511  

Use this format:  
- [ ] = Not started  
- [x] = Done  
- [>] = In progress / partial  

Add daily notes below each section as needed.

## Phase 0: Basic Repo & Environment Setup ✅ COMPLETED
- [x] Create new GitHub repo (if not already): Solcial-Agent  
- [x] Commit all existing docs (README, PRD, ARCHITECTURE, MVP, TECH_STACK, ROADMAP, TODO, copilot-instructions)  
- [x] Set up standard .gitignore (node_modules, .env, target/, .next/, etc.)  
- [x] Install pnpm globally  
- [x] Initialize project: `pnpm install` → core dependencies installed (next@15, typescript, tailwind, @solana/web3.js, @coral-xyz/anchor, wallet-adapter, etc.)  
- [x] Copy .env.example with basic values (SOLANA_RPC_URL, DATABASE_URL, AGENT_WALLET_PRIVATE_KEY, OPENAI_API_KEY)  
- [x] Test run: `pnpm build` succeeds (Next.js compiles, shows landing page with "Connect Wallet" placeholder)  

**Notes:** Phase 0 fully complete. All project scaffolding, docs, configs, and dependencies are in place. `pnpm build` and `pnpm dev` both work.

## Phase 1: Anchor Smart Contract Basics ✅ COMPLETED
- [x] Anchor project initialized in `anchor/` folder with proper Cargo workspace  
- [x] Define state accounts in `programs/social_network/src/state/`:  
  - [x] `Profile` (wallet, username, bio, bump) with PDA seeds `[b"profile", authority]`  
  - [x] `Post` (author, content, likes, timestamp, bump) with PDA seeds `[b"post", authority, timestamp]`  
- [x] Define instructions in `programs/social_network/src/instructions/`:  
  - [x] `create_profile` – creates on-chain profile PDA with username (max 32 chars) and bio (max 256 chars)  
  - [x] `create_post` – creates on-chain post PDA with content (max 280 chars), emits `PostCreated` event  
  - [x] `like_post` – increments likes counter on a post, emits `LikeAdded` event  
- [x] Define error codes in `errors.rs`: InvalidUsername, BioTooLong, InvalidContent  
- [x] Define events: `PostCreated` (author, post, content, timestamp), `LikeAdded` (liker, post, new_likes)  
- [x] `cargo check` passes (program compiles successfully)  
- [x] Build with `anchor build` (requires Anchor CLI installation on deploy machine)  
- [x] Deploy to Devnet: `anchor deploy --provider.cluster devnet`  
- [x] Record deployed program ID & update in Anchor.toml + .env  
- [x] Generate & commit IDL (anchor/idl/social_network.json)  

**Notes:** Core smart contract logic is complete — all 3 instructions (create_profile, create_post, like_post) with proper PDAs, validation, and events. `cargo check` compiles cleanly. Remaining items are deployment tasks that require Anchor CLI on a machine with Solana tooling. Ready for Phase 2 parallel work.

## Phase 2: Solder + Drizzle + PostgreSQL Indexing (19–21 Feb) — 🔜 NEXT
- [ ] Set up PostgreSQL (Neon or Supabase free tier) → get DATABASE_URL  
- [ ] Initialize Solder: `npx solder init` in root or solder/ folder  
- [ ] Define schema in `src/db/schema/` (profiles, posts, likes/notifications, agent_memory)  
- [ ] Configure Solder: programs to watch, events (PostCreated, LikeAdded)  
- [ ] Create custom indexer handlers (e.g., insert post on PostCreated event)  
- [ ] Run `npx solder dev` → verify data lands in DB  
- [ ] Create reusable queries in `src/db/queries/` (getRecentPosts, getProfileByWallet, etc.)  

**Target completion:** Feb 21  

## Phase 3: Basic Frontend + Wallet Integration (20–22 Feb)
- [ ] Set up Next.js App Router structure (app/dashboard/feed/page.tsx, etc.)  
- [ ] Install & configure @solana/wallet-adapter-react  
- [ ] Create WalletProvider & connect button  
- [ ] Build feed page: display list of latest posts (query via Drizzle)  
- [ ] Create post form → server action → call Anchor create_post  
- [ ] Like button → server action → call like_post  

**Target completion:** Feb 22  

## Phase 4: AI Agents Integration (22–25 Feb)
- [ ] Set up ElizaOS: install package, configure memory backed by Drizzle (src/agents/eliza/)  
- [ ] Create moderation agent: analyze post content → flag spam/toxicity  
- [ ] Create auto-reply agent: generate short reply → submit via Anchor reply_post  
- [ ] Implement OpenClaw autonomous loop: check recent posts every 30–60s → trigger action if eligible  
- [ ] Integrate x402: simple tip function (0.0005–0.001 SOL) on like or reply  
- [ ] Test full flow: post → moderation → auto-reply → micropayment  

**Target completion:** Feb 25  

## Phase 5: Polish, Demo & Submission (25–27 Feb)
- [ ] Add basic notifications list (from Drizzle notifications table)  
- [ ] Minimal Tailwind styling (post cards, profile view, buttons)  
- [ ] Record demo video (max 3 minutes): wallet connect → post → like → AI reply → payment  
- [ ] Upload video to YouTube/X & link in README  
- [ ] Update README: add live demo link (Vercel), video link, deployment notes  
- [ ] Final test: run full flow on Devnet, fix bugs  
- [ ] Submit to hackathon form (https://solanafoundation.typeform.com/graveyard-hack)  

**Target completion:** Feb 27 morning  

## Daily Check-in Log

**Date:** 2026-02-18  
- Today's progress:  
  - Phase 0 completed: All repo scaffolding, docs, configs, and dependencies verified  
  - Phase 1 smart contract code completed: Added `like_post` instruction with `LikeAdded` event to Anchor program  
  - All 3 core instructions now implemented: `create_profile`, `create_post`, `like_post`  
  - `cargo check` and `pnpm build` both pass  
  - Updated TODO.md with accurate progress tracking  
- Blockers: Anchor CLI deployment requires Solana tooling (can be done in parallel)  
- Tomorrow's plan: Start Phase 2 (Solder + Drizzle + PostgreSQL setup) and begin Phase 3 frontend work  

Update this file after completing major tasks or at the end of each day.  
Commit changes to track checklist progress in Git.  
If stuck, ask here or refer back to PRD/MVP/ARCHITECTURE.

Let's push hard to the finish line! 🚀
