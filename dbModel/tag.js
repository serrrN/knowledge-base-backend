const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default:Date.now
    },
    updateTime: {
        type: Date,
        default:Date.now
    }
});

const Tag = mongoose.model('Tag', tagsSchema);

module.exports = Tag;
