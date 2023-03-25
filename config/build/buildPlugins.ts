import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = (opts: BuildOptions): webpack.WebpackPluginInstance[] => {
    const {
        paths,
    } = opts;

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];
};
