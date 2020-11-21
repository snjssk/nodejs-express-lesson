const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/lesson_db', { useNewUrlParser: true });

// BlogPost スキーマの定義
const BlogPostSchema = new Schema({
  title: String,
  body: String
})

// BlogPost モデルの作成
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.export = BlogPost