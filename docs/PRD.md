# Product Requirements Document (PRD)  
**Project Name:** OnchainSocial AI  
**Version:** 1.0 (MVP for Graveyard Hackathon 2026)  
**Date:** February 2026  
**Author:** @bram0511 (Abraham Yusuf)  
**Hackathon Target:** Graveyard Hackathon by Solana Foundation – Onchain Social Track by Tapestry ($5,000 bounty) + Overall Top 3 Prizes  

## 1. Vision & Problem Statement
Onchain social applications have been declared "dead" in the crypto space due to poor UX, high costs, spam, low engagement, and lack of real incentives.  

**Vision**: Resurrect onchain social by building an AI-native social network on Solana where autonomous AI agents handle moderation, curation, content generation, and rewards — making the experience dynamic, fair, and economically viable.  

**Core Thesis**:  
"Death is just a lack of imagination."  
By combining Solana's high TPS/low fees with AI agents (ElizaOS + OpenClaw), x402 micropayments, and hybrid on/off-chain data (via Solder + Drizzle), we create a living, decentralized social platform that feels modern and engaging.

**Target Outcome for Hackathon**:  
- Fully functional MVP demo (video ≤ 3 min) showing wallet connect → post → AI moderation → auto-reply → x402 reward.  
- Standout submission: Innovative use of AI agents to revive onchain social (aligns with Tapestry's focus on composable profiles, follows, and on-chain social graph).

## 2. Target Audience & Users
- **Primary Users**: Crypto natives on Solana (developers, degens, creators in Jakarta/global).  
- **Secondary Users**: AI agent enthusiasts, SocialFi builders, Tapestry protocol users.  
- **Judge Persona**: Solana Foundation + Tapestry team — looking for innovative resurrection of onchain social with real on-chain elements, AI integration, and economic model.

## 3. Key Objectives & Success Metrics (MVP)
- Demonstrate core loop: User posts → AI moderates/curates → Engagement rewarded via x402.  
- 100% on-chain core data (posts, profiles, events) via Anchor.  
- Persistent AI agent memory & fast queries via indexed PostgreSQL.  
- Autonomous agent loop that runs without manual input.  
- Submission-ready: Repo clean, video demo, deployed on Devnet + Vercel.

## 4. Functional Requirements (MVP Scope)
### 4.1 User Flows
1. **Onboarding**  
   - Connect Solana wallet (Phantom/Backpack).  
   - Auto-create on-chain profile (PDA) if not exists.  

2. **Posting**  
   - Create text post (max 280 chars for simplicity).  
   - Post stored on-chain via Anchor program (emit `PostCreated` event).  

3. **Feed & Interactions**  
   - Real-time feed: Latest posts (indexed & queried via Drizzle).  
   - Like post → on-chain update + emit event.  
   - View notifications (likes, replies).  

4. **AI Agent Features**  
   - **Moderation**: ElizaOS agent analyzes new posts for spam/toxicity → flag or hide if needed.  
   - **Curation & Generation**: Agent suggests related posts or generates auto-replies based on context/memory.  
   - **Autonomous Loop**: OpenClaw agent runs periodically: Monitors new events → Generates reply/post → Executes on-chain via x402 if reward eligible.  

5. **Rewards & Economy**  
   - Like/reply triggers optional x402 micropayment (e.g., 0.001 SOL tip).  
   - Viral posts auto-reward author via agent.  

### 4.2 Non-Functional Requirements
- Performance: Sub-second feed load (via indexed PG), low latency agent actions.  
- Security: Wallet-based auth only; no centralized login.  
- Scalability: Designed for Devnet demo; ready for Mainnet scaling.  
- Tech Constraints: Use approved stack only (see TECH_STACK.md).

## 5. Out of Scope for MVP (Future Roadmap)
- Image/video posts  
- Full follows/followers graph (integrate Tapestry later)  
- Mobile app  
- Advanced governance (DAO voting on moderation rules)  
- Multi-agent swarms  

## 6. Assumptions & Dependencies
- Solana Devnet stable for demo.  
- Access to free RPC (Helius/Public) and PostgreSQL (Neon free tier).  
- ElizaOS/OpenClaw SDKs compatible with current Solana versions.  
- x402 protocol live and usable on Devnet.  

## 7. Risks & Mitigations
- Risk: On-chain storage costs high → Mitigation: Use compressed accounts in Anchor.  
- Risk: AI agent hallucination/spam → Mitigation: Strict moderation rules + human override in demo.  
- Risk: Indexing lag → Mitigation: Solder real-time sync + fallback RPC queries.  

## 8. Prioritized Backlog (Post-Hackathon Ideas)
1. Integrate Tapestry protocol for shared profiles/follows.  
2. Add agent personalities (e.g., "meme curator", "news summarizer").  
3. Token-gated communities.  
4. Cross-app portability of social graph.  

This PRD serves as the single source of truth. All features must align here unless explicitly updated.  
Let's build something that makes onchain social feel alive again! 🚀
