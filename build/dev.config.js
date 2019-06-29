const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const includePack = _=> {
    return [
        path.resolve(__dirname, './example'),
        path.resolve(__dirname, './src')
    ]
}

module.exports = {
    entry: './example/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].nw.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './example'),
                    path.resolve(__dirname, './src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
              test: /\.css$/,
              include: [
                path.resolve(__dirname, './example'),
                path.resolve(__dirname, './src')
              ],
              use: [
                // MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader'
              ]
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, './example'),
                    path.resolve(__dirname, './src')
                ],
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test: /\.vue$/,
                loader: ["vue-loader"]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './example/index.html'
        }),
        // new UglifyJsPlugin(),
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_fnames: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[hash][name].nw.css", 
            chunkFilename: "[hash][id].nw.css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './index.html'),
        compress: true,
        port: 9000,
        inline: true
    },
    externals: {
        Vue: 'vue',
        vueRouter: 'vue-router'
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '@': '../src'
        }
    },
    stats: {},
    // stats: {
    //     colors: true,
    //     modules: false,
    //     children: false,
    //     chunks: true,
    //     chunkModules: false
    // }
}