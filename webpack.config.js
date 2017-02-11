var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//var isProduction = process.env.NODE_ENV === 'production';
//var cssOutputPath =  '/styles/app.css';
var jsOutputPath = '/js/bundle.min.js';
//var ExtractSASS = new ExtractTextPlugin(cssOutputPath);
var port = process.env.PORT || 3000;

// ------------------------------------------
// Base
// ------------------------------------------
var webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, './public/index.html'),
    }),
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      include: Path.join(__dirname, './public'),
      loader: 'babel',
    }],
  },
};

// ------------------------------------------
// Entry points
// ------------------------------------------
webpackConfig.entry = [Path.join(__dirname, './public/main')];

// ------------------------------------------
// Bundle output
// ------------------------------------------
webpackConfig.output = {
  path: Path.join(__dirname, './dist'),
  filename: jsOutputPath,
};

// ------------------------------------------
// Devtool
// ------------------------------------------
webpackConfig.devtool = 'cheap-eval-source-map';

// ------------------------------------------
// Module
// ------------------------------------------
webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    });

// ------------------------------------------
// Plugins
// ------------------------------------------
webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

// ------------------------------------------
// Development server
// ------------------------------------------
 webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './'),
    hot: true,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };


module.exports = webpackConfig;