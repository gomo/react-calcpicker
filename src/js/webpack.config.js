var webpack = require("webpack");

module.exports = {
  output: {
      filename: 'react-calcpicker.js',
      libraryTarget: 'umd',
      library: 'ReactCalcPicker',
  },
  resolve: {
    extensions: [".js"]
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
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
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
    rules: [{
      test: /(\.js$)/,
      loader: 'babel-loader',
      query:
      {
          presets:['es2015', 'react']
      },
      exclude: /node_modules/
    }]
  },
  plugins: []
}
