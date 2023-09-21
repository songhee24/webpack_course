import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths, BuildPlatform} from "./config/build/types/types";

type Mode = 'development' | 'production'

interface EnvVariables {
    mode?: Mode,
    port?: number
    platform?: BuildPlatform
    analyzer?: boolean
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src:  path.resolve(__dirname, 'src'),
    }

    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    });
}
