module.exports = {
    webpack: (config) => {
        config.experiments = { topLevelAwait: true };
        return config;
    },
    basePath: '/crypto-monkeys-game-page',
    assetPrefix: '/crypto-monkeys-game-page/',
};
