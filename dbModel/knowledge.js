const mongoose = require('mongoose')

const knowledgeSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    updateTime: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Knowledge = mongoose.model('Knowledge', knowledgeSchema)

module.exports = Knowledge
