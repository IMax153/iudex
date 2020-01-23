/* eslint-disable */
const { resolve } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          require.resolve('babel-loader'),
          require.resolve('source-map-loader')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          require.resolve('babel-loader'),
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          IS_PRODUCTION ? MiniCssExtractPlugin.loader : require.resolve("style-loader"),
          {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 }
          },
          require.resolve('sass-loader'),
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'img/[sha512:hash:hex].[ext]'
            },
          },
          {
            loader: require.resolve('image-webpack-loader'),
            options: {
              bypassOnDebug: true,
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false,
              },
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(__dirname, '../../tsconfig.json')
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../public/index.html.ejs')
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};