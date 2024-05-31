const mongoose = require('mongoose')
// 定义中间表模型
const knowledgeTagSchema = new mongoose.Schema({
    knowledge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Knowledge'
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }
});

const KnowledgeTag = mongoose.model('KnowledgeTag', knowledgeTagSchema);


module.exports = KnowledgeTag