/**
 * Controllerではrouterから受け取ったリクエストに対してModelでの処理を実行
 * 結果をViewに渡しています。
 */

const express = require('express');
const Blogs = require('../models/Blogs');
const Views = '../views/'

module.exports = {
  doGetUser: function (req, res, next) {
    // Blogs.getUser(id).then((result) => {
    //   res.render(Views + 'index.ejs',{users: result});
    // });
    const result = Blogs.find()
    res.render(Views + 'index.ejs',{ result: result });
  }
}