var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy 中间件的选择项
var options = {
        target: 'http://192.168.18.130:8080', // 目标服务器 host
        changeOrigin: true,       
        pathRewrite: {
            '^/api':'/'          
        }
    };

// 创建代理
var exampleProxy = proxy(options);

// 使用代理
var app = express();

app.use(express.static("./public"))  //这段程序的作用是将我们的前端项目设置成静态资源
app.use('/api', exampleProxy);
app.listen(3000);