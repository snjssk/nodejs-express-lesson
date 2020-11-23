/**
 * Controllerではrouterから受け取ったリクエストに対してModelでの処理を実行
 * 結果をViewに渡しています。
 */

const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../models/Blog')
const Views = '../views/'

module.exports = {
  doGetUser: async function (req, res, next) {
    const result = await Blog.find({ title: 'aaa' }, (err, result) => {
      if (err) throw err
      console.log(result[0].title)
    })
    console.log('result:', result)
    res.render(Views + 'index.ejs',{ result: result });
  }
}