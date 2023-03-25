import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (opts: BuildOptions): webpack.ResolveOptions => {
    const { paths } = opts;

    return {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@': paths.src,
            '@app': `${paths.src}/app`,
            '@pages': `${paths.src}/pages`,
            '@components': `${paths.src}/components`,
            '@shared': `${paths.src}/shared`,
        },
    };
};
