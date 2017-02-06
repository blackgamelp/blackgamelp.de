const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Efficiently evaluate modules with source maps
  // devtool: 'eval',

  // Set entry point to ./src/main and include necessary files for hot load
  entry: ['babel-polyfill', './src/client.jsx'],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/',
  },

  // Necessary plugins for hot load
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   inject: 'body',
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         screw_ie8: true,
    //         warnings: false
    //     },
    // }),
    // new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //         }
    //     }),
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        ],
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader?module&localIdentName=[hash:base64:5]!sass-loader?indentedSyntax&outputStyle=compressed',
      },
    ],
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
  devServer: {
    host: 'localhost',
    contentBase: 'build',
    port: 3000,
    historyApiFallback: true,
    hot: false,
    inline: true,
  },
};
