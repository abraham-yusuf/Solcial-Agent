# Roadmap  
**Project:** OnchainSocial AI  
**Version:** 1.0 (Post-Graveyard Hackathon 2026)  
**Date:** February 2026  
**Author:** @bram0511  

This roadmap outlines the evolution of OnchainSocial AI beyond the MVP submitted to the Graveyard Hackathon (Feb 27, 2026). It builds on the hackathon prototype to create a sustainable, production-grade decentralized social platform powered by AI agents on Solana.

The focus shifts from demo viability → user growth → ecosystem integration → full agentic economy.

## Phases & Milestones

### Phase 1: Hackathon MVP (Completed by Feb 27, 2026)
- Core on-chain posting, liking, basic AI moderation/auto-reply (ElizaOS + OpenClaw)  
- x402 micropayments for engagement  
- Solder + Drizzle indexing for fast feeds/notifications  
- Deployed on Solana Devnet + Vercel frontend  
- Submission: Video demo, repo, Anchor IDL  

**Status:** In progress / Target completion: Feb 27, 2026

### Phase 2: Post-Hackathon Polish & Launch (Q1–Q2 2026)
**Timeline:** March – June 2026  
**Goals:** Turn MVP into a usable alpha product, gather early users/feedback.

- Mainnet deployment (Anchor program + contracts)  
- Improved UX: Better feed pagination, infinite scroll, mobile responsiveness  
- Enhanced AI: Better moderation (fine-tuned LLM prompts), multi-language support  
- Agent improvements: Persistent memory expansion, basic personality traits (e.g., "meme curator" mode)  
- Notifications: Real-time via WebSockets (e.g., Supabase Realtime or custom)  
- Basic analytics: Track engagement metrics on-chain/off-chain  
- Security audit (focus on Anchor program + agent signing)  
- Launch alpha: Invite-only via X/Discord community (@bram0511 Jakarta-based)  

**Key Dependencies:** Solana Alpenglow consensus upgrade (early 2026 for better finality), ElizaOS Jeju network prep.

### Phase 3: Tapestry & Social Graph Integration (Q2–Q3 2026)
**Timeline:** June – September 2026  
**Goals:** Make social data portable and interoperable — align with Tapestry's vision as social infrastructure for agentic commerce.

- Integrate Tapestry protocol: Portable profiles, follows/followers, shared social graph  
- Cross-app identity: Users bring their OnchainSocial profile to other dApps  
- Agent-driven follows: AI suggests connections based on interests/on-chain activity  
- Social tokens/NFT verification: Profile badges or verification via NFTs  
- Privacy features: Selective data sharing (e.g., zero-knowledge proofs for follows)  

**Rationale:** Tapestry positions as backbone for social AI; integration unlocks composable SocialFi.

### Phase 4: Agent Economy & Monetization (Q3–Q4 2026)
**Timeline:** September – December 2026  
**Goals:** Turn agents into economic participants.

- Multi-agent swarms: Collaborative curation (e.g., one agent moderates, another generates content)  
- Agent marketplace: Users create/buy custom agents (integrate Eliza Cloud/Jeju features)  
- Generative treasury: Agents autonomously manage community rewards/pool (inspired by ElizaOS roadmap)  
- Advanced x402 economy: Subscription models, agent-to-agent payments, yield from tips  
- Cross-chain agents: Via Chainlink CCIP (Ethereum/Base/BNB → Solana)  
- Governance: DAO for community rules (moderation policies, reward distribution)  

**Dependencies:** ElizaOS Jeju launch (H2 2026 target), x402 protocol maturity.

### Phase 5: Long-Term Vision (2027+)  
**Goals:** Become a leading onchain social layer with real adoption.

- Expansion: Multi-chain support (Solana primary, others via Wormhole/Tapestry)  
- Advanced features: Image/video posts, live streaming on-chain, location-based social (Heyo Planet inspo)  
- Enterprise use: Brand communities, tokenized loyalty programs  
- AI evolution: Inter-agent communication, decentralized marketplaces for agents  
- Metrics target: 10k+ active users, $1M+ in x402 micropayments processed  

## Guiding Principles
- Stay Solana-native: Leverage upgrades (Alpenglow for \~1s finality, Firedancer for throughput)  
- Agent-centric: Every new feature should enhance AI autonomy/economy  
- User-owned data: Align with Tapestry's decentralized social graph  
- Iterative & community-driven: Launch early alphas, gather feedback via X (@bram0511)  
- Security first: Audits before each major release  

This roadmap is living — update based on hackathon feedback, Solana ecosystem shifts (e.g., 2026 upgrades), and ElizaOS/Tapestry developments.  

Post-hackathon priority: Polish MVP → Integrate Tapestry → Scale agent economy.

Let's build the future of onchain social — one agent at a time! 🚀
