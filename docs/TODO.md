# TODO.md – OnchainSocial AI  
**Project Progress Tracker**  
**Hackathon Deadline:** February 27, 2026 (Submission due)  
**Current Date:** February 18, 2026 (tracking start)  
**Owner:** @bram0511  

Use this format:  
- [ ] = Not started  
- [x] = Done  
- [>] = In progress / partial  

Add daily notes below each section as needed.

## Phase 0: Basic Repo & Environment Setup (18 Feb – Target finish today)
- [ ] Create new GitHub repo (if not already): onchain-social-ai  
- [ ] Commit all existing docs (README, PRD, ARCHITECTURE, MVP, TECH_STACK, roadmap, copilot-instructions)  
- [ ] Set up standard .gitignore (node_modules, .env, target/, etc.)  
- [ ] Install pnpm globally if not already installed  
- [ ] Initialize project: `pnpm init` → add core dependencies (next@15, typescript, tailwind, @solana/web3.js, etc.)  
- [ ] Copy .env.example and fill basic values (SOLANA_RPC_URL, DATABASE_URL dev, etc.)  
- [ ] Test run: `pnpm dev` (should show Next.js welcome page)  

**Today's notes (18 Feb):**  

## Phase 1: Anchor Smart Contract Basics (18–20 Feb)
- [ ] Install Anchor CLI: `cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked`  
- [ ] Init Anchor project in `anchor/` folder: `anchor init social_network`  
- [ ] Define basic accounts & instructions in `programs/social_network/src/lib.rs`:  
  - create_profile (PDA for username, bio)  
  - create_post (content, author, timestamp, likes=0)  
  - like_post (increment likes counter)  
- [ ] Define events: PostCreated, LikeAdded  
- [ ] Build & test locally: `anchor build && anchor test`  
- [ ] Deploy to Devnet: `anchor deploy --provider.cluster devnet`  
- [ ] Record program ID & update in config/env  
- [ ] Generate & commit IDL (anchor/target/idl/social_network.json)  

**Target completion:** Feb 20 evening  

## Phase 2: Solder + Drizzle + PostgreSQL Indexing (19–21 Feb)
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

## Daily Check-in Template (Add below every day)
**Date:** [YYYY-MM-DD]  
- Today's progress:  
- Blockers / issues:  
- Tomorrow's plan:  

Example:  
**Date:** 2026-02-18  
- Today's progress: Created repo, committed all docs, set up pnpm & env basics  
- Blockers: -  
- Tomorrow's plan: Install Anchor & initialize basic program  

Update this file after completing major tasks or at the end of each day.  
Commit changes to track checklist progress in Git.  
If stuck, ask here or refer back to PRD/MVP/ARCHITECTURE.

Let's push hard to the finish line! 🚀
