const express = require('express');
const Tag = require("../dbModel/tag")

// 对标签进行操作
// 添加标签
exports.add = async (req, res) => {
  try {
    const { name } = req.body
    const tag = new Tag({ name })
    const findResult = await Tag.find({ name })

    //不存在则添加标签
    if (findResult.length === 0) {
      const saveResult = await tag.save()
      res.status(200).send({ message: "添加成功", result: saveResult })
    }
    //如果标签存在 则提示标签已存在
    else {
      res.status(200).send({ message: "重复添加!" })
    }

  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

// 获取全部标签
exports.getAll = async (req, res) => {
  try {
    const result = await Tag.find()
    res.status(200).send({result,message:"获取成功"})
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

// 获取某个标签
exports.getById = async (req, res) => {
  try {
    const {_id}= req.body
    const result = await Tag.findById(_id)
    res.status(200).send({result,message:"获取成功"})
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}
// 修改标签
exports.updateById = async (req, res) => {
  try {
    const { _id,name} = req.body
    const query = {}
    if (_id) {
      query._id = _id
    }
    if (name) {
      query.name = name
    }
    // 执行修改
    const results = await Tag.findByIdAndUpdate(query)
    res.status(200).send({
      results,
      message:"修改成功"
    })
  } catch (err) {
    res.status(500).send({message:err.message})
  }
}

// 删除标签
exports.deleteById = async (req, res) => {
  try {
    const { _id } = req.body
    const results = await Tag.findByIdAndDelete(_id)
    res.status(200).send({
      results,
      message:"删除成功"
    })
  } catch (err) {
    
  }
}