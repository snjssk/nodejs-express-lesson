/**
 * routes.js
 * HTTPリクエストのエンドポイントに対してどのモジュールで処理するか
 */

const express = require('express')
const router = express.Router()
const blogController = require('../controllers/BlogController')

router.get('/blog', blogController.doGetUser);
// router.post('/users/regist', userController.doRegistUser);

module.exports = router