/**
 * ModelではDBから値を取得し、Controllerに返す
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Blog スキーマの定義
const BlogSchema = new Schema({
  title: String,
  body: String
})

// Blog モデルの作成
const Blog = mongoose.model('Blog', BlogSchema)

// const article = new Blog({
//   title: 'ccc',
//   body: 'body to ccc'
// })
//
// article.save(err => {
//   if (err) console.log(err)
//   console.log('saved')
// })

// const r = Blog.find({})
// console.log(r)

module.exports = Blog