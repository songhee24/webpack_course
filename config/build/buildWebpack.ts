import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const {paths, port} = options
    const isDev = options.mode === 'development'

    return{
        mode: options.mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: port ?? 8000,
            open: true,
        } : undefined
    };
}
