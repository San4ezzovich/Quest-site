import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }],
        exclude: /node_modules/,

    }

    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }

    return [
        tsLoader,
        cssLoader
    ]
}