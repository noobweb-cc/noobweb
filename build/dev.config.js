const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'noobweb.js',
        libraryTarget: "umd",
        library: "noobweb"
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 9000,
        inline: true
    }
})