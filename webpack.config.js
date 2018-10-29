const path = require('path');
let webpack = require('webpack');

// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
    module: {
        rules: [
        //   {
        //     // 用正则去匹配要用该 loader 转换的 CSS 文件
        //     test: /\.css$/,
        //     use: ExtractTextWebpackPlugin.extract({
        //         // 将css用link的方式引入就不再需要style-loader了
        //         use: 'css-loader'       
        //     })
        //   },
          {
            // 增加对 SCSS 文件的支持
            test: /\.scss/,
            // use: ExtractTextWebpackPlugin.extract({
            //     // 将css用link的方式引入就不再需要style-loader了
            //     use: ['css-loader', 'sass-loader'],      
            // })
            // // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },

        ]
      },
    devServer: {
        contentBase: './dist',  //配置开发服务运行时的文件根目录
        compress: true,          // 服务器压缩
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: false               // 开启热更新
    },
    plugins: [
        
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css'),
        // 热替换，热替换不是刷新
        new webpack.HotModuleReplacementPlugin(),

    ],
    
    mode: 'development', // 可以更改模式
    resolve: {}, // 配置解析

};