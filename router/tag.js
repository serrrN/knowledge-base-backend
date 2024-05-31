const express = require("express")
const router = express.Router();
const tagController = require("../controller/tagController")

// 添加标签
router.post("/add", tagController.add)

// 获取全部标签
router.get("/getAll", tagController.getAll)

// 获取某一个标签
router.get("/getById", tagController.getById)

// 修改标签
router.put("/updateById", tagController.updateById)

// 删除标签
router.delete("/deleteById",tagController.deleteById)
module.exports = router