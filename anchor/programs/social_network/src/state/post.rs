use anchor_lang::prelude::*;

#[account]
pub struct Post {
    /// Author's wallet public key.
    pub author: Pubkey,
    /// Post content (max 280 chars).
    pub content: String,
    /// Number of likes.
    pub likes: u64,
    /// Unix timestamp of creation.
    pub timestamp: i64,
    /// PDA bump seed.
    pub bump: u8,
}

impl Post {
    /// 8 (discriminator) + 32 (author) + 4+280 (content) + 8 (likes) + 8 (timestamp) + 1 (bump)
    pub const MAX_SIZE: usize = 8 + 32 + (4 + 280) + 8 + 8 + 1;
}
