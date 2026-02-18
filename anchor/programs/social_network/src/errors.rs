use anchor_lang::prelude::*;

#[error_code]
pub enum SocialError {
    #[msg("Username must be between 1 and 32 characters.")]
    InvalidUsername,
    #[msg("Bio must be at most 256 characters.")]
    BioTooLong,
    #[msg("Post content must be between 1 and 280 characters.")]
    InvalidContent,
}
