const joi = require("joi")

//对问题的约束
const question = joi.string().required()

//对答案的约束
const answer = joi.string().required()

//对标签的约束
const tags = joi.array().required()

exports.knowledge_limit ={
	// 表示对req.body里面的数据进行验证
	body:{
		question,
        answer,
        tags
	}
}

