'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

baseConfig.output.publicPath = './assets/';

let config = Object.assign({}, baseConfig, {
  entry: {
    index: path.join(__dirname, '../src/index'),
    vendor: ['react', 'react-dom', 'react-router']
  },
  cache: false,
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve('./src', 'index.html'),
      filename: '../index.html',
      //chunks: ['vendors', 'app'],
      //要把script插入到标签里
      inject: 'body',
      hash: true
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths, [path.join(__dirname, '/../src')]
  )
}, {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader", {
    publicPath: './'
  })
});

module.exports = config;