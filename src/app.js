
import './css/main.css';
// require('./css/main.css');
// 通过 CommonJS 规范导入 show 函数
const show = require('./componet/show');

// 执行 show 函数
show('Webpack');

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

