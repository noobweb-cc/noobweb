const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path');

const pathResolve = str => {
    return path.resolve(__dirname, str)
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
                    pathResolve('./example'),
                    pathResolve('./src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
                'css-loader'
              ]
            },
            {
                test: /\.less$/,
                include: [
                    pathResolve('./example'),
                    pathResolve('./src')
                ],
                use: [ 'vue-style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
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
            '@': '../src',
            'vue$': 'vue/dist/vue.esm.js'
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