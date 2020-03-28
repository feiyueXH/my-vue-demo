const path = require("path");
const VueLoaderPlugin =  require('vue-loader/lib/plugin');//. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const {CleanWebpackPlugin}=require('clean-webpack-plugin');//自动清除文件插件
const HtmlWebpackPlugin=require('html-webpack-plugin');//生成html插件
const MiniCssExtractPlugin=require("mini-css-extract-plugin");//抽离css代码插件
module.exports = {
  entry:{//入口
    index:"./src/index.js"
  },

  output:{//输出
    path:path.resolve(__dirname,"dist"),//输出文件的文件夹
    filename:"[name].js"//定义输出文件的名称
  },

  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/index.css'    //文件目录会放入output.path里
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
        test:/\.css$/,
        use:['style-loader','css-loader']
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
        // include:path.resolve(__dirname,'src/js'),   //直接规定查找的范围
      }
    ]
  }
}