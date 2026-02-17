# Architecture Overview  
**Project:** OnchainSocial AI  
**Version:** 1.0 (MVP – Graveyard Hackathon 2026)  
**Date:** February 2026  
**Author:** @bram0511  

## High-Level Architecture Principles
We follow a **hybrid layered + feature-based architecture** optimized for Solana dApps:

- **Layered Separation**: Strict separation between presentation (UI), business logic (agents & API), data access (on-chain + off-chain DB), and infrastructure (indexer, contracts).
- **Feature-based Organization**: Group related files by domain/feature (e.g., posts, profiles, agents) to improve scalability and maintainability.
- **Atomic Design for UI**: Components organized by atoms → molecules → organisms → templates → pages for reusable, testable UI.
- **Hybrid Data Flow**: Core data immutable on-chain (Anchor); derived/fast-query data indexed off-chain (Solder + Drizzle + PostgreSQL).
- **Autonomous AI Layer**: Separate agents (ElizaOS + OpenClaw) for background loops and autonomous behaviors.
- **Clean Code & Type Safety**: TypeScript everywhere; Anchor IDL for strong typing between frontend and contracts.

This structure supports rapid MVP development while being extensible for post-hackathon features (e.g., Tapestry integration).

## Folder Structure
```
onchain-social-ai/                  # Root repository
├── anchor/                         # Solana smart contracts (Rust + Anchor)
│   ├── programs/                   # Anchor program source
│   │   └── social_network/         # Main program
│   │       ├── src/                # Rust code
│   │       │   ├── lib.rs
│   │       │   ├── instructions/
│   │       │   ├── state/
│   │       │   └── errors.rs
│   │       └── Anchor.toml
│   ├── migrations/                 # Anchor migrations (if needed)
│   ├── tests/                      # Anchor tests
│   └── target/                     # Build artifacts (gitignored)
│
├── app/                            # Next.js App Router (presentation layer)
│   ├── (auth)/                     # Group routes if needed (e.g., login)
│   ├── dashboard/                  # Protected/main app routes
│   │   ├── feed/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/                        # Server actions / route handlers (if not using server components fully)
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Landing / home
│   └── globals.css                 # Global styles (Tailwind)
│
├── src/                            # Shared source code (non-App Router)
│   ├── components/                 # Atomic Design UI components
│   │   ├── atoms/                  # Basic: Button, Input, Avatar, etc.
│   │   ├── molecules/              # Composed: PostCard, LikeButton, etc.
│   │   ├── organisms/              # Complex: FeedList, NotificationPanel, etc.
│   │   └── templates/              # Layout wrappers
│   │
│   ├── lib/                        # Utilities & shared logic
│   │   ├── solana/                 # Solana helpers (connection, wallet, Anchor client)
│   │   ├── anchor/                 # IDL import + program client
│   │   ├── utils/                  # General helpers (formatting, constants)
│   │   └── constants.ts
│   │
│   ├── db/                         # Drizzle ORM + PostgreSQL integration
│   │   ├── schema/                 # Table definitions (posts.ts, profiles.ts, etc.)
│   │   ├── migrations/             # Generated Drizzle migrations
│   │   ├── index.ts                # Drizzle client export
│   │   └── queries/                # Reusable queries (getFeed, getProfile, etc.)
│   │
│   ├── agents/                     # AI agent logic (ElizaOS + OpenClaw)
│   │   ├── eliza/                  # ElizaOS agents & memory handlers
│   │   ├── openclaw/               # Autonomous loops & execution
│   │   ├── types.ts                # Agent interfaces
│   │   └── index.ts                # Agent orchestrator
│   │
│   └── hooks/                      # Custom React hooks (useWallet, usePosts, etc.)
│
├── solder/                         # Solder indexer (real-time on-chain → PostgreSQL)
│   ├── config.ts                   # Solder config (programs, events to monitor)
│   ├── indexers/                   # Custom event handlers
│   │   └── postCreated.ts          # Example: Handle PostCreated event → insert to DB
│   └── schema.ts                   # Drizzle schema mirror (synced with src/db/schema)
│
├── docs/                           # Documentation
│   ├── PRD.md
│   ├── ARCHITECTURE.md             # This file
│   ├── MVP.md
│   ├── roadmap.md
│   └── todo.md
│
├── .github/                        # GitHub-specific
│   └── workflows/                  # CI/CD if needed
│       └── copilot-instructions.md # Rules for Copilot/Claude
│
├── public/                         # Static assets (images, fonts)
├── drizzle.config.ts               # Drizzle Kit config (schema path, migrations)
├── .env.example                    # Template env vars
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Layer Responsibilities & Data Flow
1. **Presentation Layer** (`app/` + `src/components/`):  
   - Renders UI with Tailwind.  
   - Uses server components where possible for SSR.  
   - Calls server actions or hooks for data.

2. **Application Layer** (`src/hooks/`, `src/agents/`, `app/api/`):  
   - Orchestrates business logic (e.g., post creation flow: wallet → Anchor tx → event emit).  
   - AI agents run in background (Node.js process or Vercel cron-like).

3. **Domain / Data Access Layer** (`src/db/`, `src/lib/solana/`, Anchor):  
   - **On-chain**: Anchor program + web3.js for writes/transactions.  
   - **Off-chain**: Drizzle queries for fast reads (feed, notifications, agent memory).  
   - Solder bridges: Monitors Anchor events → auto-inserts/updates PostgreSQL.

4. **Infrastructure Layer** (`anchor/`, `solder/`):  
   - Smart contracts (deployed to Devnet).  
   - Indexer (Solder runs locally/dev or as service).

**Example Data Flow – User Creates Post**:
- Frontend → Server Action / Hook  
- → Anchor client → Call `createPost` instruction (sign tx with wallet)  
- → On-chain: Store PDA + emit `PostCreated` event  
- → Solder indexer → Catch event → Drizzle insert to `posts` table  
- → AI agent (OpenClaw loop) → Query new post via Drizzle → Generate reply → Execute via x402/Anchor  
- → Frontend polls/refreshes feed via Drizzle query

## Why This Structure?
- **Scalable**: Easy to add features (e.g., new agent type in `agents/`).  
- **AI-Friendly for Copilot/Claude**: Clear separation reduces hallucinations; agents isolated.  
- **Hackathon-Optimized**: Minimal boilerplate; focus on demo flows.  
- **Inspired by Best Practices**: Combines Solana dApp patterns (Anchor + Next.js), Drizzle/Neon tutorials, and Atomic Design.

Update this file as architecture evolves. All code generation must respect this structure unless explicitly changed here.
11:30 PM WIB (Feb 17, 2026) 🚀
