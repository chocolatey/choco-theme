module.exports = {
    plugins: [
        require('postcss-preset-env')({
            // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
            features: {}
        }),
        require('cssnano')({
            preset: 'default'
        })
    ]
};
