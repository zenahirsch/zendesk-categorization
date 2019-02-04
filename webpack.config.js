/* global __dirname */

const path = require('path');
const webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dir_js = path.resolve(__dirname, 'src');
const dir_build = path.resolve(__dirname, 'app/assets');

const environment = process.env.env;
const isProductionBuild = process.env.env === 'prod';

var plugins = [
    new MiniCssExtractPlugin({
        filename: "app.css",
        chunkFilename: "[id].css"
    })
];

if (isProductionBuild) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }));
}

module.exports = {
    entry: path.resolve(dir_js, 'app.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimize: isProductionBuild,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                            '@babel/plugin-proposal-object-rest-spread'
                        ],   
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: plugins,
    stats: {
        colors: true
    },
    devtool: isProductionBuild ? undefined : 'source-map',
    mode: isProductionBuild ? 'production' : 'development'
};
