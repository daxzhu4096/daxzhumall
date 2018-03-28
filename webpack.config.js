const path = require("path")
const webpack = require('webpack')
const extractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const getHtmlConfig = function (name) {
  return new HtmlWebpackPlugin({
    template: `./src/view/${name}.html`,
    filename: `view/${name}.html`,
    chunks: ["common", name],
    hash: true,
    inject: true
  })
}
//环境变量的配置：为了区分打包时是处在线上环境还是开发环境
// dev / online 
const WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'
console.log(WEBPACK_ENV)
module.exports = {
  entry: {
    "common": "./src/page/common/index.js",
    "index": ['./src/page/index/index.js'],
    "login": "./src/page/login/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "js/[name]bundle.js"
  },
  devServer:{
    contentBase: './dist',
    compress: true,
    port: 8088
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: extractTextPlugin.extract({
        use: ["css-loader"]
      })
    },
    {
      test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
      use: ["url-loader?limit=8192&name=resource/[name].[ext]"]
    }]
  },
  externals: {
    "jquery": "window.jQuery"
  },
  plugins: [
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "js/base.js"
    }),
    // 单独打包css
    new extractTextPlugin({
      filename: "css/[name]_[hash:8].css"
    }),
    // Html 模板
    /*     new HtmlWebpackPlugin({
          template: "./src/view/index.html",
          filename: "view/index.html",
          chunks: ["common","index"],
          hash: true,
          inject: true
        }),
        // Html 模板
        new HtmlWebpackPlugin({
          template: "./src/view/login.html",
          filename: "view/login.html",
          chunks: ["common","login"],
          hash: true,
          inject: true
        }) */
    getHtmlConfig("index"),
    getHtmlConfig("login"),
    // new CleanWebpackPlugin(["dist"])
  ],
  resolve: {
    alias: {
      util            : __dirname + '/src/util',
      page            : __dirname + '/src/page',
      service         : __dirname + '/src/service',
      image           : __dirname + '/src/image',
      node_modules    : __dirname + '/node_modules'
    }
  }
}