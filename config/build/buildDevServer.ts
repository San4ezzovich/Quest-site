import {BuildOptions} from "./types/config";

export const buildDevServer = (opts: BuildOptions) => {
    const {
        port
    } = opts;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}