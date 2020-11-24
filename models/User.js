
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Userスキーマの定義
const UserSchema = new Schema({
  name: String,
  age: Number
})

// User モデルの作成
const User = mongoose.model('User', UserSchema)

module.exports = User