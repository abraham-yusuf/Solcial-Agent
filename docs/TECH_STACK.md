# Tech Stack  
**Project:** OnchainSocial AI  
**Version:** 1.0 (MVP – Graveyard Hackathon 2026)  
**Date:** February 2026  
**Author:** @bram0511  

This document lists the exact technologies, versions (recommended for stability in 2026), and official external resources/documentation. All choices prioritize Solana-native tools, TypeScript safety, and hackathon-friendly setup (fast iteration, low cost, Devnet compatibility).

## Core Stack Summary
- **Language**: TypeScript (frontend & agent logic) + Rust (smart contracts)  
- **Frontend Framework**: Next.js 15 (App Router)  
- **Styling**: Tailwind CSS v3+  
- **Blockchain**: Solana (Devnet for MVP)  
- **Smart Contracts**: Anchor Framework  
- **Wallet Integration**: Solana Wallet Adapter  
- **Indexer & Off-Chain DB**: Solder + Drizzle ORM + PostgreSQL  
- **AI Agents**: ElizaOS + OpenClaw  
- **Payments**: x402 Protocol  
- **Package Manager**: pnpm (recommended for speed & disk efficiency)  

## Detailed Components & Versions

### 1. Frontend & UI
- **Next.js** → v15.x (App Router for server components & actions)  
  - Why: SSR/SSG support, built-in routing, easy Solana integration.  
- **React** → v18+  
- **Tailwind CSS** → v3.x or v4 (if stable)  
- **Solana Wallet Adapter** → @solana/wallet-adapter-react v0.15+  
  - Official Docs: https://github.com/anza-xyz/wallet-adapter  

### 2. Blockchain & Smart Contracts
- **Solana** → Devnet (for MVP); target Mainnet post-hackathon  
  - Official Developer Docs: https://solana.com/developers  
  - Solana Web3.js → @solana/web3.js v1.95+  
- **Anchor Framework** → Latest stable (v0.30+ recommended)  
  - Why: Simplifies Rust program development, auto-IDL generation, security macros.  
  - Official Documentation: https://www.anchor-lang.com/  
  - GitHub: https://github.com/coral-xyz/anchor  
  - Installation Guide: https://www.anchor-lang.com/docs/installation  

### 3. Indexer & Off-Chain Database
- **Solder** → Latest (from solder.build)  
  - Why: Modern Solana backend framework; auto-generates APIs from indexed data, Drizzle integration built-in, real-time event monitoring.  
  - Official Website: https://solder.build/  
  - Documentation: https://solder.gitbook.io/solder-documentation  
  - GitHub: https://github.com/solder-build/solder  
- **Drizzle ORM** → v0.33+ (with PostgreSQL driver)  
  - Why: Type-safe queries, lightweight, excellent with Solder.  
  - Official Docs: https://orm.drizzle.team/  
- **PostgreSQL** → v16+ (use Neon/Supabase free tier for hackathon)  

### 4. AI Agents
- **ElizaOS** → Latest stable (from elizaOS/eliza repo)  
  - Why: TypeScript framework for autonomous AI agents; persistent memory, plugins (including Solana), multi-LLM support. Ideal for moderation, curation, memory in social context.  
  - Official Documentation: https://docs.elizaos.ai/ (or https://eliza.how/docs/intro)  
  - GitHub Repository: https://github.com/elizaOS/eliza  
  - Solana Plugin Example: Check plugin-solana in repo or related issues (e.g., https://github.com/elizaOS/eliza/issues/1619 for Solana Agent Kit integration)  
  - Getting Started: https://docs.elizaos.ai/getting-started/overview  

- **OpenClaw** → Latest (openclaw/openclaw)  
  - Why: Personal/self-hosted AI assistant with autonomous loops, tools, and execution (browser, cron, on-chain actions). Perfect for background agent behaviors like monitoring events and autonomous replies/tips.  
  - Official Website: https://openclaw.ai/  
  - Documentation: https://docs.openclaw.ai/  
  - GitHub Repository: https://github.com/openclaw/openclaw  
  - Getting Started: https://docs.openclaw.ai/start/getting-started  

### 5. Payments & Economy
- **x402 Protocol** → v2 (latest spec)  
  - Why: HTTP-native micropayments for agent economy; seamless tips/rewards on Solana (low fees, instant).  
  - Official Website: https://www.x402.org/  
  - Solana Guide: https://solana.com/developers/guides/getstarted/intro-to-x402  
  - Coinbase CDP Docs (facilitator option): https://docs.cdp.coinbase.com/x402/welcome  
  - NPM Package (Solana impl): https://www.npmjs.com/package/x402-solana  

## Version Pinning Recommendations
Pin exact versions in `package.json` / `Cargo.toml` for reproducibility:
- Next.js: `"next": "^15.0.0"`
- Anchor: Use `anchor-cli` latest via `cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked`
- Drizzle: `"drizzle-orm": "^0.33.0"`
- Avoid deprecated packages; always check changelogs.

## External Resources Quick Links
- ElizaOS: https://docs.elizaos.ai/ | https://github.com/elizaOS/eliza  
- OpenClaw: https://docs.openclaw.ai/ | https://github.com/openclaw/openclaw  
- Anchor/Solana: https://www.anchor-lang.com/ | https://solana.com/developers  
- x402: https://www.x402.org/ | https://solana.com/x402/what-is-x402  
- Solder: https://solder.gitbook.io/solder-documentation | https://github.com/solder-build/solder  

This stack ensures fast prototyping, strong typing, and alignment with Solana ecosystem trends in 2026. Update versions only after testing on Devnet.  
For any deprecated/outdated suggestions from Copilot/Claude, cross-reference these official links.
