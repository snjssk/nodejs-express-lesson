
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const Views = '../views/'

module.exports = {
  doGetUser: async (req, res, next) => {
    res.render(Views + 'register.ejs',{ result: {} });
  },
  doPostUser: async (req, res, next) => {
    console.log('post', req.body)
    const name = req.body.name
    const age = req.body.age

    const result = await User.create({ name, age }, (err, result) => {
      if (err) throw err
    })
    console.log('result:', result)
    res.render(Views + 'registerComplete.ejs',{ result: {} });
  }
}