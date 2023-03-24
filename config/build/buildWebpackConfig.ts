import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

export const buildWebpackConfig = (opts: BuildOptions): Configuration => {
    const {
        paths,
        isDev
    } = opts;

    return {
        mode: opts.isDev ? 'development' : 'production',
        entry: paths.entry,
        output: {
            filename: '[name].[hash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(opts),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(opts) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}