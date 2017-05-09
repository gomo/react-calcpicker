var webpack = require("webpack");

module.exports = {
  entry: __dirname + '/react-calcpicker.js',
  output: {
      path: __dirname + '/../../dist/',
      filename: 'react-calcpicker.js',
      libraryTarget: 'umd',
      library: 'ReactCalcPicker',
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
    },
    {
      'numeral': {
        root: 'numeral',
        commonjs2: 'numeral',
        commonjs: 'numeral',
        amd: 'numeral'
      }
    },
    {
      'numeral/locales': {
        root: 'locales',
        commonjs2: 'numeral/locales',
        commonjs: 'numeral/locales',
        amd: 'numeral/locales'
      }
    },
    {
      'react-portal': {
        root: 'Portal',
        commonjs2: 'react-portal',
        commonjs: 'react-portal',
        amd: 'react-portal'
      }
    },
    {
      'class-names': {
        root: 'classNames',
        commonjs2: 'class-names',
        commonjs: 'class-names',
        amd: 'class-names'
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
