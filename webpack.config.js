const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

Object.assign(exports, {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: ['./index'],
    vendor: ['react', 'react-dom', 'redux']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[BUILD-NUMBER].js',
    chunkFilename: '[name].[BUILD-NUMBER].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        /*loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&sourceMap'
          //'postcss-loader' Malappa removed for loader issue while building
        ]*/
        loader: 'style-loader!css-loader'
      },
      {
        test: /node_modules\/.*\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        loaders: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CopyWebpackPlugin([
      { from: `${__dirname  }/app/assets`, to: `${__dirname  }/build/assets` },
      { from: `${__dirname  }/app/mock_data`, to: `${__dirname  }/build/mock_data` },
      { from: `${__dirname  }/app/locales`, to: `${__dirname  }/build/app/locales` }
    ]),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      filename: 'index.html',
      inject: true,
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeOptionalTags: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[BUILD-NUMBER].js'
    })
  ]
});

if (isProduction) {
  // deployed environments
  Object.assign(exports, {
    bail: true,
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true,
          unsafe: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        }
      }),
      ...exports.plugins
    ]
  });
} else {
  Object.assign(exports, {
    debug: true,
    devtool: 'inline-source-map', //Debuging purpose i added this --> Malappa
    cache: true,
    output: Object.assign(exports.output, {
      pathinfo: true
    }),
    devServer: {
      outputPath: path.join(__dirname, 'build'),
      colors: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 8000,
      inline: true
    }
  });
}
