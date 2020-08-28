const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
     app: './static/js/app.js'
   },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
   ]
}
