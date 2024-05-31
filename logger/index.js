const winston = require('winston');

// 创建一个新的 logger 实例
const logger = winston.createLogger({
  level: 'info', // 日志级别
  format: winston.format.json(), // 日志格式
  transports: [
    new winston.transports.File({ filename: './log/error.log', level: 'error' }), // 错误日志保存到 error.log 文件
    new winston.transports.File({ filename: './log/other.log' }) // 其他日志保存到 other.log 文件
  ]
});

// 如果是开发环境，则同时将日志输出到控制台
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
