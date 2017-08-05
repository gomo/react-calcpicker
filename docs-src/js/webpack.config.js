var webpack = require("webpack");

module.exports = {
  output: {
      filename: 'index.js'
  },
  resolve: {
    extensions: [".js"]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  watch: true,
  devtool: "#inline-source-map",
  module: {
    loaders: [{
      test: /(\.js$)/,
      loader: 'babel-loader',
      query:
      {
          presets:['es2015', 'react'],
      },
      exclude: /node_modules/
    }]
  },
  plugins: []
}
