
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()

 


userRouter.get('/', (req, res) => {
  res.render('layout')
})


module.exports = {
  userRouter
}
