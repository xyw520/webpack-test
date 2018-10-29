const path = require('path');
let webpack = require('webpack');


/*

webpack的正常配置模块

module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}

*/

module.exports = {
    // JavaScript 执行入口文件
    entry: './src/app.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
        contentBase: './dist',
        compress:true,          // 服务器压缩
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: true               // 开启热更新
    },
    plugins: [
        // 热替换，热替换不是刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{}, // 模块配置
    mode:'development', // 可以更改模式
    resolve:{}, // 配置解析
    
};