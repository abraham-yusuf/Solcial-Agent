use anchor_lang::prelude::*;

use crate::state::Post;

#[derive(Accounts)]
pub struct LikePost<'info> {
    #[account(mut)]
    pub post: Account<'info, Post>,

    pub authority: Signer<'info>,
}

/// Event emitted when a post is liked.
#[event]
pub struct LikeAdded {
    pub liker: Pubkey,
    pub post: Pubkey,
    pub new_likes: u64,
}

pub fn handle_like_post(ctx: Context<LikePost>) -> Result<()> {
    let post = &mut ctx.accounts.post;
    post.likes = post.likes.checked_add(1).unwrap();

    emit!(LikeAdded {
        liker: ctx.accounts.authority.key(),
        post: post.key(),
        new_likes: post.likes,
    });

    Ok(())
}
