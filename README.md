# Solcial-Agent

## OnchainSocial AI

**AI-Powered Onchain Social Network** built on **Solana** to revive the "dead" category of onchain social experiences.

**Hackathon**: Graveyard Hackathon 2026 by Solana Foundation  
**Track**: Onchain Social by Tapestry – $5,000 bounty  
**Overall Target**: Top 3 prizes ($30,000 total pool)

### Vision
"Death is just a lack of imagination."  
We resurrect onchain social by infusing it with **autonomous AI agents** that moderate content, curate feeds, generate posts/replies, and reward meaningful engagement — all natively on Solana.

The result: A decentralized, scalable social platform that feels alive, fair, and economically sustainable — without centralized moderators or off-chain dependencies for core logic.

### Core Features (MVP)
- Wallet-based registration & on-chain profiles
- Create, read, like, and reply to posts — fully stored on-chain via Anchor
- **AI moderation & curation**: Detect spam, analyze sentiment, suggest related content (powered by ElizaOS)
- **Autonomous agent behaviors**: Agents generate replies, curate feeds, and participate as virtual influencers (via OpenClaw)
- **Micropayments for engagement**: Instant tips and rewards using x402 protocol (agent-to-user and agent-to-agent economy)
- **Real-time indexing & querying**: On-chain events indexed to PostgreSQL via Solder + Drizzle ORM for fast feeds, notifications, and persistent agent memory

### Tech Stack
- **Frontend**: Next.js 15 (App Router) · TypeScript · Tailwind CSS
- **Blockchain**: Solana · Anchor (Rust smart contracts) · @solana/web3.js · Solana Wallet Adapter
- **Indexer & Database**: Solder.build (https://solder.build/) · Drizzle ORM · PostgreSQL (Neon/Supabase recommended)
- **AI Agents**: ElizaOS (persistent memory & Solana integration) · OpenClaw (autonomous execution loops)
- **Payments**: x402 protocol (HTTP-native micropayments on Solana)
- **Deployment**: Vercel (frontend) · Solana Devnet/Mainnet (contracts)

### Project Structure Overview
```
├── anchor/                  # Anchor Rust program (smart contracts & IDL)
├── app/                     # Next.js app (pages, layouts, components)
├── src/
│   ├── components/          # Atomic Design UI components
│   ├── lib/                 # Solana utils, Anchor client, helpers
│   ├── db/                  # Drizzle schema, Solder config, migrations
│   ├── agents/              # ElizaOS agents + OpenClaw loop implementations
│   └── api/                 # Server actions, route handlers
├── solder/                  # Solder indexer configs & custom event handlers
├── docs/                    # PRD.md, ARCHITECTURE.md, MVP.md, roadmap.md, etc.
├── .github/                 # copilot-instructions.md & workflows
├── drizzle.config.ts
├── .env.example
├── README.md
└── package.json
```

### Quick Start (Development)
1. Clone the repo:
   ```bash
   git clone https://github.com/abraham-yusuf/Solcial-Agent.git
   cd Solcial-Agent
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment:
   - Copy `.env.example` to `.env.local`
   - Fill in Solana RPC, PostgreSQL URL, wallet keys, etc.
4. Build & deploy Anchor program (devnet):
   ```bash
   cd anchor
   anchor build
   anchor deploy --provider.cluster devnet
   ```
5. Run Solder indexer:
   ```bash
   npx solder dev
   ```
6. Start frontend:
   ```bash
   pnpm dev
   ```

### Hackathon Submission
- **Demo Video**: Max 3 minutes – showcase wallet connect, posting, AI moderation/auto-reply, x402 micropayment flow
- **Repository**: Full source code + Anchor IDL
- **Deployment**: Frontend on Vercel, contracts on Solana Devnet

Built by [@bram0511](https://x.com/bram0511) in Jakarta for the Graveyard Hackathon.  
Let's bring onchain social back to life with AI! 🚀

Questions, feedback, or collaboration? Reach out on X: @bram0511
