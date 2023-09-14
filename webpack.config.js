const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            // new webpack.ProgressPlugin()
        ]
    };
}
