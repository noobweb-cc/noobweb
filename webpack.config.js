const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'noobweb.js',
        libraryTarget: "umd",
        library: "noobweb"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
              test: /\.css$/,
              include: [path.resolve(__dirname, 'src')],
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // {sourceMap: true}
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
        })
        // {sourceMap: true}
        /**
         * 
         * {
            cache: true,
            beautify: false, // 最紧凑的输出
            comments: true, // 删除所有的注释
            compress: {
              warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
              drop_console: true, // 还可以兼容ie浏览器 // 删除所有的 `console` 语句
              collapse_vars: true, // 内嵌定义了但是只用到一次的变量
              reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
            }
        }
         * 
         */
    ],
    // plugins: [new HtmlWebpackPlugin({
    //     title: 'try',
    //     template: './index.html'
    // })],
    externals: {
        vue: 'vue',
    },
    resolve: {
        extensions: ['.vue', '.js']
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: true,
        chunkModules: false
    }
}