var path = require('path');
var Webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); //提取css
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./config/dev-server.js');
const baseConfig = require('./config/base-config.js');
module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash:5].js'
    },
    devServer: webpackConfig,
    module: baseConfig,
    plugins: [
        // new Webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        // new HtmlWebpackInlinePlugin({
        //     inlineChunks: ['manifest']
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        /* 压缩 + treeShake */
        // new UglifyJsPlugin(),
        /* 清空指定目录 */
        new CleanWebpackPlugin(['dist'])
    ]
};