const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    list: "./src/list.js",
    detail: "./src/detail.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[chunkhash:8].js",
  },
  mode: "development",
  //到哪找loader
  // 制定查找loader的目录
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[hash].[ext]",
            outputPath: "images/",
          },
        },
      },
      {
        test: /\.js$/,
        use: path.resolve(__dirname, "./myLoaders/replaceLoader.js")
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "replaceLoader",
      //     {
      //       loader: "replaceLoaderAsync",
      //       options: {
      //         name: "我的loader",
      //       },
      //     },
      //   ],
      // },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
      // chunksSortMode: "manual", //str:none auto manual function
    }),
    new htmlWebpackPlugin({
      template: "./src/list.html",
      filename: "list.html",
      chunks: ["list"],
      // chunksSortMode: "manual", //str:none auto manual function
    }),
    new htmlWebpackPlugin({
      template: "./src/detail.html",
      filename: "detail.html",
      chunks: ["detail"],
      // chunksSortMode: "manual", //str:none auto manual function
    }),
    new miniCssExtractPlugin({
      filename: "css/[name]-[contenthash].css",
    }),
    // new htmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "list.html",
    //   chunks: ["index"],
    //   chunksSortMode: "manual", //str:none auto manual function
    // }),
    // new htmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "detail.html",
    //   chunks: ["index", "detail", "list"],
    //   chunksSortMode: "manual", //str:none auto manual function
    // }),
  ],
};
