const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const VueLoaderPlugin = require('vue-loader/lib/plugin') // .Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 自动清除文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css代码插件
const webpack = require('webpack')
module.exports = {
  entry: {
    // 入口
    index: './src/main.js'
  },

  output: {
    // 输出
    path: path.resolve(__dirname, '../dist'), // 输出文件的文件夹
    filename: '[name].js', // 定义输出文件的名称
    chunkFilename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
        test: /\.(png|svg|jpg|gif)$/, // 找到三种格式中的任意一种
        // use:['file-loader']
        use: [
          {
            loader: 'url-loader', // 把图片转成base64
            options: {
              limit: 50 * 1024, // 小于50k就会转成base64
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // env针对的是ES的版本，它会自动选择。react针对的就是react
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    absoluteRuntime: false,
                    corejs: 2,
                    helpers: true,
                    regenerator: true,
                    useESModules: false
                  }
                ]
              ]
            }
          }
        ],

        exclude: /node_modules/ // 不去检查node_modules里的内容，那里的js太多了，会非常慢
        // include:path.resolve(__dirname,'src/js'),   //直接规定 查找的范围
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'font',
          name: '[name].[ext]'
        }
      },

      {
        test: require.resolve('underscore'),
        use: 'imports-loader?_=underscore'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
      // chunks:['index'], //页面里要引入的js文件，值对应的是entry里的key。省略参数会把entry里所有文件都引入
      // excludeChunks:['one'],//页面里不能引入的js文件，与chunks刚好相反
      // minify:{    //html-webpack-plugin内部集成了html-minifier
      //     collapseWhitespace:true,    //压缩空格
      //     removeAttributeQuotes:true, //移除引号
      //     removeComments:true,        //移除注释
      // }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // 文件目录会放入output.path里
      chunkFilename: 'css/[name].css'
    }),
    new webpack.ProvidePlugin({
      // 它是一个插件，所以需要按插件的用法new一个
      // '$':'jquery', //接收名字:模块名
      // '_':'underscore'  //引入underscore库
      __: 'lodash'
    })
  ],

  optimization: {
    // 优化
    splitChunks: {
      cacheGroups: {
        // 缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
        commonjs: {
          name: 'vender', // 输出的名字（提出来的第三方库）
          test: /\.js/, // 通过条件找到要提取的文件
          chunks: 'initial' // 只对入口文件进行处理
        }
      }
    }
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('../src')
    }
  }
}
