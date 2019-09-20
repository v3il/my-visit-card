// vue.config.js
module.exports = {
    chainWebpack: (config) => {
        config.module.rule('1')
            .test(/\.(png|jpe?g|gif)(\?.*)?$/)
            .use('lqip-loader')
            .loader('lqip-loader')
            .end();
    },
};