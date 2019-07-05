const webpack = require('webpack');
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
        filename: './FF/js/[name].[hash].nw.js'
    },
    /**
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }, */
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
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                  },
                  "css-loader"
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
            filename: "./FF/css/[hash][id].nw.css", 
            chunkFilename: "./FF/css/[hash][id].nw.css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: '../dist',
        compress: true,
        port: "9200",
        inline: true,
        hot: true,
        open: true
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