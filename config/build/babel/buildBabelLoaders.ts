import {BuildOptions} from "../types/types";

export function buildBabelLoaders({mode}: BuildOptions) {
    const isDev = mode === 'development'

    return {
        // test: /\.m?js$/,
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react', {
                        runtime: isDev ? 'automatic' : 'classic',
                    }
                    ]
                ]
            }
        }
    }
}
