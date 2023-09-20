import {ModuleOptions} from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development'

    const assetLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
            },
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader",
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const tsLoader = {
        // ts-laoder умееть работать с JSX из под коробки
        // Если бы мы не использовали typescript: нужен был бы babel-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        assetLoader,
        scssLoader,
        tsLoader,
    ]
}
