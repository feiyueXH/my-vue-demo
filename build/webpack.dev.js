const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  
  devServer: {
    host: 'localhost',   //服务器的ip地址
    port: "1573",  //端口
    open: true,  //自动打开页面
    hot: true, //开启热更新
    proxy: {//启用代理
      '/api/v1/**': {
        target: 'https://cnodejs.org/',
        secure: false,
        changeOrigin: false,
      },
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()    //引入热更新插件
  ],  
}

module.exports = merge(baseConfig, devConfig);