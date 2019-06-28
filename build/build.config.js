const webpack = require('webpack');
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'noobweb.js',
        libraryTarget: "umd",
        library: "noobweb"
    }
})