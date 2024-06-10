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

app.use((req, res, next) => {
	// code=1为成功,=0为失败,默认设为0,方便处理失败的情况
	res.cc = (err, code = 0) => {
		res.send({
			code,
			// 判断这个error是错误对象还是字符串
			message: err instanceof Error ? err.message : err,
        })
    }
   
	next()
})

const Joi = require('joi') 

// 引入路由模块
const knowledgeRouter = require('./router/knowledge');
const tagRouter = require("./router/tag")
const knowledgeTagRouter = require("./router/knowledgeTag")

// 注册路由
app.use("/api/v1/knowledge",knowledgeRouter);
app.use("/api/v1/tag", tagRouter)
app.use("/api/v1/knowledgeTag", knowledgeTagRouter)


 
// 对不符合joi规则的情况进行报错
app.use((err,req, res, next) => {
	if (err instanceof Joi.ValidationError){
		res.send({
			code: 0,
			message:'输入的数据不符合验证规则'
		})
    }
     
})
 
module.exports = app;