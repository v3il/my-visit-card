const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-optional-catch-binding',
    ["@babel/plugin-proposal-decorators", { legacy: true }],
];

module.exports = {
    plugins,
};