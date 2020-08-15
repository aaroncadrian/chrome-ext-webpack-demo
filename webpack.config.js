const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
