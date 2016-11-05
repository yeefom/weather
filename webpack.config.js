var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    // HtmlWebpackPluginConfig
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: ['react-hot', 'babel-loader']
    }]
  }
};
