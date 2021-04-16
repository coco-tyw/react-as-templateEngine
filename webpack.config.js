const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require('globule');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getEntriesList = (path) => globule.find('**/*.jsx', {cwd: `${__dirname}${path}`})

module.exports = {
  mode: 'development',
  plugins: [
    // new HtmlWebpackPlugin()
    // ...getEntriesList('/src/pages').map(entry => new HtmlWebpackPlugin({
    //   template: `./src/pages/${entry}`,
    //   filename: entry.replace(new RegExp('.jsx$', 'i'), '.html')
    // }))
    new HtmlWebpackPlugin({
      template: './src/pages/index.jsx',
      // filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  // entry: './src/pages/index.jsx',
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
          // {loader: "style-loader", options: {injectType: "linkTag"}},
          {loader: "css-loader"}
        ]
      }
    ]
  },
  target: ["web", "es5"]
};
