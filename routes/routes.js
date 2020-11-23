/**
 * routes.js
 * HTTPリクエストのエンドポイントに対してどのモジュールで処理するか
 */

const express = require('express')
const router = express.Router()
const blogController = require('../controllers/BlogController')
const userController = require('../controllers/UserController')

// blog
router.get('/blog', blogController.doGetUser)

// user
router.get('/user', userController.doGetUser)
router.post('/user/register', userController.doPostUser)

module.exports = router