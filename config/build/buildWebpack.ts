import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const isDev = options.mode === 'development'

    return{
        mode: options.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: options.port ?? 8000,
            open: true,
        } : undefined
    };
}
