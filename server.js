// server.js
const app = require('./app');



// 定义端口号
const PORT = process.env.PORT || 3000;

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("http://localhost:3000/")
});
