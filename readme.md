# webpack

webpack === 模块打包器

工程化 多人协作

wabpack 是基于node    万物皆模块

从入口递归查找依赖 解析 打包

## 安装

npm init -y

npm i webpack webpack-cli -D

## 启动

npx命令会在node-modules/bin中找到对应的软模块执行

零配置：webpack零配置启动   比较简单，不能支撑开发

- npx webpack    运行打包
- 

## 自定义配置文件

enry

output

mode

module

chunk

bundle

loader   告诉webpack使用那种方式解析模块

plugin

## sourceMap
- 为了开发时，快速的定位问题
- 线上代码，有时候也会开启 前端错误定位，快速定位问题
  + devtool: "cheap-moudle-eval-source-map"  //推荐方式


## WabpackDevServer
npm install webpack-dev-server
devServer:{}

## 解决跨域问题
设置代理 proxy

## Hot Module Replacement(HMR: 热模块替换)
- 引入webpack
- new webpack.HotModuleReplacementPlugin()
局部的替换 不用更新
- hotOnly

## babel

## 性能优化