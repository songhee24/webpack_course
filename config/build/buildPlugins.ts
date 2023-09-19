import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildPlugins = (options: BuildOptions):Configuration['plugins'] => {
    const isDev = options.mode === 'development'

    return [
        new HtmlWebpackPlugin({template: options.paths.html}),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
        // new webpack.ProgressPlugin()
    ]
}
