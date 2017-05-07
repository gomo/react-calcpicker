var webpack = require("webpack");

module.exports = {
  entry: __dirname + '/react-currency-calculator.js',
  output: {
      path: __dirname + '/../../dist/',
      filename: 'react-currency-calculator.js',
      libraryTarget: 'umd',
      library: 'ReactCurrencyCalculator',
  },
  resolve: {
    extensions: ['', ".js", ".jsx", ".es6"]
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  watch: true,
  devtool: "#inline-source-map",
  module: {
    loaders: [{
      test: /(\.jsx?$|\.es6?$)/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react'],
          plugins: [["transform-es2015-classes", { "loose": true }]]
      },
      exclude: /node_modules/
    }]
  },
  plugins: []
}
