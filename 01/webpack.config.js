const path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 执行构建的入口文件 支持{字符串 数字 对象}
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js", //->index.js
    detail: "./src/detail.js", //->detail.js
    list: "./src/list.js" //->list.js
  },
  // 执行构建后的资源名称和位置
  output: {
    // 必须是绝对路径，执行构建后的资源存放位置
    path: path.resolve(__dirname, "./dist"),
    // 执行构建后的资源名称
    // []占位符，那么会根据key值制定file的名称
    // filename: "main.js"
    filename: "[name].js"
  },
  //none  production生产模式  development 开发模式
  // 选择模式之后 webpack会启动相关的插件
  // 比如 生产模式会压缩代码  开发模式不会
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 作用非常单一 把css in js的方式放在bundle中
        // 多个loader使用数组 有执行顺序 从右到左
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "flle-loader",
          options: {
            name: "[name].png",
            outputPath: "imges/"
          }
        }
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index", "list"]
    }),
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "list.html",
      chunks: ["list", "detail"]
    }),
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "detail.html",
      chunks: ["detail"]
    })
  ]
};

// chunks 一个代码片段肯定有一个入口文件 但不一定有多个依赖module
// 多个chunk要对应多个入口
// bundle chunk entry module
// bundle是文件本身，chunk是bundle里的代码片段

/**
 * 单页面应用 只有一个入口
 * 多页应用 有多个入口
 */

/**
 * webpack 对于前端来说 只支持 js json
 */
