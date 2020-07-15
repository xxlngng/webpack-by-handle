# webpack 搭建工程化环境
- pc 移动
	+ 是否需要seo
	+ 兼容
-	多人、单人
	+ 定制开发规范
	+	提交规范
- 技术栈 
	+ vue 
	+ less
	+ icon

	+ less-loader 是 webpack和less之间的桥

## css3 适配不同浏览器前缀
 + postcss-loader 
	 + 需要配置postcss.config.js 文件
 + autoprefixer

## 自定义loader
	- loader 本质是一个函数，但是不可以是剪头函数
	- 拿到原内容，做进一步加工处理，然后返回

