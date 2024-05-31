const express = require('express');
const router = express.Router();
const knowledgeController = require('../controller/knowledgeController');

 //创建知识
router.post('/add', knowledgeController.add);

//获取全部知识
router.get("/", knowledgeController.getAll)

//查找知识
router.get("/getById",knowledgeController.getById)


//删除某一个知识点
router.delete("/deleteById",knowledgeController.deleteById)

//修改某一个知识点
router.put("/updateById",knowledgeController.updateById)




module.exports = router;