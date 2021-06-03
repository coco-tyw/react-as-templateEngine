const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require('globule');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getEntriesList = () => globule.find(path.resolve(__dirname, 'src/pages/**/*.jsx'));

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
    globalObject: 'this'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8000,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/public/index.html'),
    //   filename: 'template.html',
    //   title: 'react as template engine',
    //   templateParameters: {
    //     BASE_URL: '/'
    //   }
    // }),
    new StaticSiteGeneratorPlugin('bundle.js', '/'),
    // new HtmlWebpackPlugin(),
    // ...getEntriesList().map(entry => new HtmlWebpackPlugin(entry)),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/index.jsx',
    //   // filename: 'index.html'
    // }),
    // new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {loader: "style-loader"},
          {loader: "css-loader?modules"}
        ]
      }
    ]
  },
  target: ["web", "es5"]
};
