const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  // output: {
  //   path: path.resolve(__dirname, 'dist/'),
  //   filename: 'main.[contenthash].js',
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: 'file-loader',
      },
    ],

  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};