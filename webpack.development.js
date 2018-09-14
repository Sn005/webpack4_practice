'use strict'

const merge = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base')
const devConf = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist')
  }
})
module.exports = devConf
