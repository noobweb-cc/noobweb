const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'noobweb.js',
        libraryTarget: "umd",
        library: "noobweb"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, '../src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
              test: /\.css$/,
              include: [path.resolve(__dirname, '../src')],
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                include: [path.resolve(__dirname, '../src')],
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
    ],
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