// 引入mongoose模块
const mongoose = require('mongoose')

// 连接到mongodb数据库
mongoose.connect("mongodb://localhost:27017/knowledge-base")
.then(()=>{
    // 连接成功后输出提示信息
    console.log(`Mongodb has been connected.`)
    console.log("Please have a great coding.")
})