use anchor_lang::prelude::*;

use crate::errors::SocialError;
use crate::state::{Post, Profile};

#[derive(Accounts)]
#[instruction(content: String)]
pub struct CreatePost<'info> {
    #[account(
        init,
        payer = authority,
        space = Post::MAX_SIZE,
        seeds = [b"post", authority.key().as_ref(), &clock.unix_timestamp.to_le_bytes()],
        bump,
    )]
    pub post: Account<'info, Post>,

    #[account(
        seeds = [b"profile", authority.key().as_ref()],
        bump = profile.bump,
    )]
    pub profile: Account<'info, Profile>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub clock: Sysvar<'info, Clock>,
    pub system_program: Program<'info, System>,
}

/// Event emitted when a new post is created.
#[event]
pub struct PostCreated {
    pub author: Pubkey,
    pub post: Pubkey,
    pub content: String,
    pub timestamp: i64,
}

pub fn handle_create_post(ctx: Context<CreatePost>, content: String) -> Result<()> {
    require!(
        !content.is_empty() && content.len() <= 280,
        SocialError::InvalidContent
    );

    let post = &mut ctx.accounts.post;
    let clock = &ctx.accounts.clock;

    post.author = ctx.accounts.authority.key();
    post.content = content.clone();
    post.likes = 0;
    post.timestamp = clock.unix_timestamp;
    post.bump = ctx.bumps.post;

    emit!(PostCreated {
        author: ctx.accounts.authority.key(),
        post: post.key(),
        content,
        timestamp: clock.unix_timestamp,
    });

    Ok(())
}
