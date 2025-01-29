module.exports = function override(config, env) {
    // Ignore source map warnings
    config.ignoreWarnings = [
        {
            message: /Failed to parse source map/,
        },
    ];
    return config;
};