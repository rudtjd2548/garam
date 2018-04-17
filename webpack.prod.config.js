const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'prop-types', 'react', 'react-dom', 'react-redux', 'react-router-dom',
  'redux', 'redux-thunk', 'redux-logger'
]

module.exports = {
  entry: {
    'babel-polyfill': ['babel-polyfill'],
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|ico|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: function(fullPath) {
              return path.relative(__dirname + '/src', fullPath)
            }
          }
        }
      },
      /* SCSS */
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [/*'css-loader', 'sass-loader'*/
            {
              loader: 'css-loader',
              options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                    path: './config/postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }))
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist',
    publicPath: 'http://www.garamfood.org/'
  },
  resolve: {
   extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './public' } // to: output.path
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    }),
  ]
}
