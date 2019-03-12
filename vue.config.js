const path = require('path');

module.exports = {
    assetsDir: 'assets',
    publicPath: '/vue-homepage/',
    outputDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    css: undefined,
    lintOnSave: undefined,
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'less',
            'patterns': [
                path.resolve(__dirname, './src/less/**/*.less'),
            ]
        }
    }
};
