const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.min.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','babili']
          }
        }
      }
    ]
  },
  plugins: [
      new BabiliPlugin(),
      new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
    ]
};
