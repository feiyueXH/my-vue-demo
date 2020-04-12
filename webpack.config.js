const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const VueLoaderPlugin =  require('vue-loader/lib/plugin');//. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const {CleanWebpackPlugin}=require('clean-webpack-plugin');//自动清除文件插件
const HtmlWebpackPlugin=require('html-webpack-plugin');//生成html插件
const MiniCssExtractPlugin=require("mini-css-extract-plugin");//抽离css代码插件

module.exports = {
  entry:{//入口
    index:"./src/main.js"
  },

  output:{//输出
    path:path.resolve(__dirname,"dist"),//输出文件的文件夹
    filename:"[name].js",//定义输出文件的名称
    chunkFilename: "js/[name].js"
  },

  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css',    //文件目录会放入output.path里
      chunkFilename: "css/[name].css"
    })
  ],

  devServer:{
    host:'localhost',   //服务器的ip地址
    port:"1573",  //端口
    open:true,  //自动打开页面
  },

  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
            // 要加上style-loader才能正确解析.vue文件里的<style>标签内容
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            'postcss-loader'
        ]
      },
      {
        test:/\.(jpg|png|gif)$/,    //找到三种格式中的任意一种
        // use:['file-loader']
        use:[
          {
              loader:'url-loader',    //把图片转成base64
              options:{
                  limit:50*1024,  //小于50k就会转成base64
                  outputPath: 'images'
              }
          }
        ]
      },
      {
        test:/\.js$/,
        use:[
            {
                loader:'babel-loader',
                options:{   //env针对的是ES的版本，它会自动选择。react针对的就是react
                  "presets": ["@babel/preset-env","@babel/preset-react"],
                  "plugins": ["@babel/plugin-transform-runtime"],
                },
            
            }
        ],
       
        exclude: /node_modules/,  //不去检查node_modules里的内容，那里的js太多了，会非常慢
        // include:path.resolve(__dirname,'src/js'),   //直接规定 查找的范围
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ],
  },

  resolve: {
    extensions:['.js','.vue','.json'],
    alias: {
        "@": resolve('src')
    }
  }
}