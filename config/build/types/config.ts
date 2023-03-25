export interface BuildPaths {
    entry: string
    src: string
    html: string
    build: string
}

export interface BuildOptions {
    paths: BuildPaths
    port: number
    isDev: boolean
}

type BuildMode = 'development' | 'production';

export interface BuildEnv {
    mode?: BuildMode
    port?: number
}
