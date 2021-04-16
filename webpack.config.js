const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require('globule');

const getEntriesList = (path) => globule.find('**/*.jsx', {cwd: `${__dirname}${path}`})

module.exports = {
  mode: 'development',
  plugins: [
    ...getEntriesList('/src/pages').map(entry => new HtmlWebpackPlugin({
      template: `./src/pages/${entry}`,
      filename: entry.replace(new RegExp('.jsx$', 'i'), '.html')
    }))
  ],
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
