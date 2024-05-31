//引入express模块
const express = require('express');

//创建app应用
const app = express();

//使用中间件cors
const cors = require('cors');
app.use(cors());

//设置静态资源目录
app.use(express.static('public'));


// 数据库连接
require('./mongodb/mongodb')

// 引入body-parser中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 引入日志模块
const logger = require('./logger');


  
// 引入路由模块
const knowledgeRouter = require('./router/knowledge');
const tagRouter = require("./router/tag")
const knowledgeTagRouter = require("./router/knowledgeTag")

// 注册路由
app.use("/api/v1/knowledge",knowledgeRouter);
app.use("/api/v1/tag", tagRouter)
app.use("/api/v1/knowledgeTag", knowledgeTagRouter)


// 记录错误日志
app.use((err, req, res, next) => {
    logger.error(err.message); 
    res.status(500).send(err.message); // 返回 500 错误响应
    next()
});

 
module.exports = app;