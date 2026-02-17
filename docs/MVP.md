# MVP Scope & Definition  
**Project:** OnchainSocial AI  
**Version:** 1.0 (Graveyard Hackathon Submission)  
**Deadline:** February 27, 2026 (Submission due date)  
**Goal:** Deliver a functional, demo-ready MVP that clearly demonstrates the resurrection of onchain social via AI agents — qualifying for Onchain Social track ($5,000 bounty) and overall prizes.

## MVP Definition
**Minimum Viable Product** = The smallest set of features that:
- Allows end-to-end user flow (wallet → post → interaction → AI response → reward)
- Runs fully on Solana Devnet + indexed PostgreSQL
- Can be showcased in a 3-minute video demo
- Meets hackathon submission requirements (repo, video, working prototype)

Anything beyond this scope is **post-hackathon** (see roadmap.md).

## Core MVP Features (Must-Have)
These are non-negotiable for a winning submission.

1. **Wallet Connection & Profile Creation**  
   - Connect Solana wallet (Phantom/Backpack supported).  
   - Auto-create on-chain profile (PDA) with username (derived from wallet or input).  
   - Display basic profile in UI.

2. **Create & View Posts**  
   - Form to create text post (max 280 characters).  
   - Submit transaction via Anchor program → store on-chain + emit `PostCreated` event.  
   - Real-time feed showing latest 10–20 posts (queried from Drizzle/PostgreSQL via Solder indexing).

3. **Basic Interactions**  
   - Like a post → on-chain update (increment likes counter or separate like PDA) + emit event.  
   - Display like count on each post.

4. **AI Moderation & Auto-Reply (ElizaOS)**  
   - New post triggers ElizaOS agent:  
     - Analyze content (spam/toxicity detection via LLM prompt).  
     - If clean → allow; if flagged → mark as hidden (UI filter).  
   - Simple auto-reply: Agent generates short reply (e.g., "Great post! 🚀") and submits via Anchor.

5. **Autonomous Agent Loop (OpenClaw)**  
   - Background loop (run every 30–60 seconds):  
     - Query recent posts via Drizzle.  
     - If post meets criteria (e.g., likes > 3) → agent generates reply or tip.  
     - Execute on-chain action (reply or x402 micropayment).

6. **Micropayments via x402**  
   - Like or auto-reply triggers small x402 payment (e.g., 0.0005–0.001 SOL tip from liker/agent to author).  
   - Show transaction hash or simple success message in UI.

7. **Notifications (Basic)**  
   - Show list of likes/replies received (queried from Drizzle `notifications` table).  
   - Real-time-ish via polling or simple refresh button.

## Technical Must-Haves for MVP
- Anchor program deployed to Solana Devnet (with at least `createPost`, `likePost`, `replyPost` instructions).  
- Solder indexer running → syncs events to PostgreSQL in real-time.  
- Drizzle ORM queries for feed, profile, notifications.  
- ElizaOS agent with basic memory (store user preferences or post history in PG).  
- OpenClaw loop implemented as Node.js script or server action.  
- Frontend: Next.js App Router with Tailwind, responsive basic UI (no fancy design needed).  
- Environment: `.env` with Solana RPC, DB URL, wallet key (for agent signing – use dev wallet).

## Demo Video Script (3 Minutes Max)
1. (0:00–0:30) Intro + wallet connect → profile created on-chain.  
2. (0:30–1:00) Create a sample post → show tx hash + appears in feed.  
3. (1:00–1:45) Like the post → show like count update + x402 micropayment confirmation.  
4. (1:45–2:30) AI agent auto-replies (show ElizaOS/OpenClaw logs or UI notification).  
5. (2:30–3:00) Show notifications list + quick explanation: "AI moderates, curates, rewards autonomously on Solana."

## Out of Scope for MVP (Do NOT Implement)
- Image/video uploads  
- User follows / social graph  
- Advanced agent personalities or multi-agent coordination  
- Custom token (use native SOL or simple SPL for tips)  
- Authentication beyond wallet connect  
- Mobile responsiveness perfection  
- Production-grade error handling / loading states  
- Mainnet deployment  
- Complex UI animations / themes

## Acceptance Criteria
- Repo compiles and runs locally (`pnpm dev` + `npx solder dev`).  
- Anchor program deploys successfully to Devnet.  
- At least one full flow (post → like → AI reply → x402 tip) works end-to-end.  
- Video demo uploaded to YouTube/X and linked in README.  
- No critical bugs that crash the demo.

Focus ruthlessly on these items until February 27.  
Once MVP is demo-ready, iterate only on polish/bug fixes — no new features.

Track progress in `todo.md`. Let's ship something that stands out! 🚀
