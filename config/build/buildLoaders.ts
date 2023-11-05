import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[]  {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
console.log(isDev);
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ?  "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPatch:string) => Boolean(resPatch.includes('.module.')),
                    localIdentName: isDev? "[path][name]__[local]__[hash:base64:5]"  : "[hash:base64:5]"
                },
            }
          },
          "sass-loader",
        ],
      }
    return [
        typescriptLoader,
        styleLoader,
    ]
}