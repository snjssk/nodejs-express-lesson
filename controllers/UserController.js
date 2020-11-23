
const express = require('express')
const mongoose = require('mongoose')
const Views = '../views/'

module.exports = {
  doGetUser: async (req, res, next) => {
    res.render(Views + 'register.ejs',{ result: {} });
  },
  doPostUser: async (req, res, next) => {
    console.log('post')
    res.render(Views + 'registerComplete.ejs',{ result: {} });
  }
}