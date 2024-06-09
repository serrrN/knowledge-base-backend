const express = require('express');
const Knowledge = require("../dbModel/knowledge")
const Tag = require("../dbModel/tag")


//1.对知识进行操作 根据知识的标签 如果存在则不添加 如果不存在则添加
//新增知识
exports.add = async (req, res) => {
  try {
    const { question, answer, createTime, updateTime } = req.body
    const knowledge = new Knowledge({question, answer,createTime,updateTime})
    const result = await knowledge.save()
    res.send({message:"添加成功",result})
  } catch (err) {
    res.json({message:err.message})
  }
}

//获取全部知识
exports.getAll = async (req, res) => {
  try {
    const results = await Knowledge.find()
    res.send({message:"获取成功",code:0,results})
  } catch (err) {
    res.json({message:err.message,code:1})
  }
}

//查找知识
exports.getById = async (req, res) => {
  try {
    const { _id,question, answer, tag } = req.body
    const query = {}
    if (_id) {
      query._id = _id
    }
    if (question) {
      query.question = question
    }
    if (answer) {
      query.answer = answer;
    }
    if (tag) {
      query.tag = {$all:tag}
    }
    //执行查询
    const results = await Knowledge.find(query)
    res.send({
      results,
      message:"查找成功"
    })
  } catch (err) {
    res.send({message:err.message})
  }
}



//删除知识
exports.deleteById = async (req, res) => {
  try {
    const {_id} = req.body
    const query = {}
    query._id = _id
    if (_id === "6655442c8be7006d2e91d4a2") {
      const result = await Knowledge.find(query)
      res.send({message:"删除失败,这是测试数据"})
    } else {
      const result = await Knowledge.findOneAndDelete(query)
      res.send({message:"删除成功",result})
    }
    
   
  } catch (err) {
    res.status(500).send({message:err.message})
  }
}

//修改知识
exports.updateById = async (req, res) => {
  try {
    const { _id,question, answer } = req.body
    const query = {}
    if (_id) {
      query._id = _id
    }
    if (question) {
      query.question = question
    }
    if (answer) {
      query.answer = answer;
    }
    //执行修改
    const results = await Knowledge.findByIdAndUpdate(query)
    res.status(200).send({
      results,
      message:"修改成功"
    })
  } catch (err) {
    res.status(500).send({message:err.message})
  }
}



