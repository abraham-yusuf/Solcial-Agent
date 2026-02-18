use anchor_lang::prelude::*;

#[account]
pub struct Profile {
    /// Wallet public key of the profile owner.
    pub wallet: Pubkey,
    /// Username (max 32 chars).
    pub username: String,
    /// Short bio (max 256 chars).
    pub bio: String,
    /// PDA bump seed.
    pub bump: u8,
}

impl Profile {
    /// 8 (discriminator) + 32 (wallet) + 4+32 (username) + 4+256 (bio) + 1 (bump)
    pub const MAX_SIZE: usize = 8 + 32 + (4 + 32) + (4 + 256) + 1;
}
