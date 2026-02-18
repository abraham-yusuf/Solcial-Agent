use anchor_lang::prelude::*;

use crate::errors::SocialError;
use crate::state::Profile;

#[derive(Accounts)]
#[instruction(username: String)]
pub struct CreateProfile<'info> {
    #[account(
        init,
        payer = authority,
        space = Profile::MAX_SIZE,
        seeds = [b"profile", authority.key().as_ref()],
        bump,
    )]
    pub profile: Account<'info, Profile>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handle_create_profile(ctx: Context<CreateProfile>, username: String, bio: String) -> Result<()> {
    require!(
        !username.is_empty() && username.len() <= 32,
        SocialError::InvalidUsername
    );
    require!(bio.len() <= 256, SocialError::BioTooLong);

    let profile = &mut ctx.accounts.profile;
    profile.wallet = ctx.accounts.authority.key();
    profile.username = username;
    profile.bio = bio;
    profile.bump = ctx.bumps.profile;

    Ok(())
}
