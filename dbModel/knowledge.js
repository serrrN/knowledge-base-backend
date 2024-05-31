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
    createdTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedTime: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Knowledge = mongoose.model('Knowledge', knowledgeSchema)

module.exports = Knowledge
