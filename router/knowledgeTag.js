const express = require("express")
const router = express.Router();
const knowledgeTagController = require("../controller/knowledgeTagController")

// 关联知识和标签
router.post("/", knowledgeTagController.add)

// 查找全部关系
router.get("/", knowledgeTagController.get)

//查找一个关系
router.get("/getOne", knowledgeTagController.getOne)

// 解除关联
router.delete("/", knowledgeTagController.delete)


module.exports = router