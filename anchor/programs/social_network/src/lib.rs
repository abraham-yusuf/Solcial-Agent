use anchor_lang::prelude::*;

pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod social_network {
    use super::*;

    /// Creates a new on-chain profile (PDA) for the connected wallet.
    pub fn create_profile(ctx: Context<CreateProfile>, username: String, bio: String) -> Result<()> {
        instructions::create_profile::handle_create_profile(ctx, username, bio)
    }

    /// Creates a new on-chain post (PDA) authored by the signer.
    pub fn create_post(ctx: Context<CreatePost>, content: String) -> Result<()> {
        instructions::create_post::handle_create_post(ctx, content)
    }
}
