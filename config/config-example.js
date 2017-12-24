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

module.exports = config;