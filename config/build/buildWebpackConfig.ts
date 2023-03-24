import path from "path";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";

export const buildWebpackConfig = (opts: BuildOptions) => {
    const {
        paths
    } = opts;

    const config: webpack.Configuration = {
        mode: "development",
        entry: paths.entry,
        devtool: 'inline-source-map',
        output: {
            filename: '[name].[hash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(opts),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers()
    }

    return config;
}