const config = {};

// Either use the environment variables below for the Twitter API keys, or
// replace the environment variables with the actual keys.
config.keys = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_KEY,
    token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

config.users = [
    // A comma separated list of users to follow.
];


// Same goes here: either use the environment variable below for your Discord
// webhook, or replace the variables with the actual id and token
config.discord = {
    id: process.env.DISCORD_CHANNEL_ID,
    token: process.env.DISCORD_CHANNEL_TOKEN
};

module.exports = config;