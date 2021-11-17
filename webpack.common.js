const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: './[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: 'app',
      favicon: "./src/img/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: 'about',
      favicon: "./src/img/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: './src/pricingList.html',
      filename: 'pricingList.html',
      chunks: 'pricingList',
      favicon: "./src/img/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: './src/tutor.html',
      filename: 'tutor.html',
      chunks: 'tutor',
      favicon: "./src/img/favicon.ico"
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, 'dist/src/img'),
        },
      ],
    }),
  ],
};
