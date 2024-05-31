const KnowledgeTag = require("../dbModel/knowledgeTag")

// 关联知识和标签
exports.add = async (req, res) => {
    try {
        const { tag_id, knowledge_id } = req.body
        const knowledge = new KnowledgeTag({ tag: tag_id, knowledge: knowledge_id })
        const result = await knowledge.save()
        res.send({ message: "关联成功！", result })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

// 查找全部关系
exports.get = async (req, res) => {
    try {
        const result = await KnowledgeTag.find()
        res.send({ message: "查找成功", result })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

// 查找一个关系
exports.getOne = async (req, res) => {
    try {
        const { tag_id, knowledge_id } = req.body
        const query = {
            tag_id,
            knowledge_id
        }
        const result = await KnowledgeTag.findOne(query)
        res.send({ message: "查找成功!", result })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
// 解除关联
exports.delete = async (req, res) => {
    try {
        const { tag_id, knowledge_id } = req.body
        const query = {
            tag_id, knowledge_id
        }
        const result = await KnowledgeTag.findOneAndDelete(query)
        res.send({ message: "解除关联成功！", result })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}


