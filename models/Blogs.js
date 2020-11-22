/**
 * ModelではDBから値を取得し、Controllerに返す
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema

// BlogPost スキーマの定義
const BlogPostSchema = new Schema({
  title: String,
  body: String
})

// BlogPost モデルの作成
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.export = BlogPost