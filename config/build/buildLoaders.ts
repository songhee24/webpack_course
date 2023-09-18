import {ModuleOptions} from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development'

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
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
        scssLoader,
        tsLoader,
    ]
}
