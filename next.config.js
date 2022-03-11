module.exports = {
    webpack: (config) => {
        config.experiments = { topLevelAwait: true };
        return config;
    },
    assetPrefix: '/crypto-monkeys-game-page/',
};
