
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  res.render('template/homePage')
})

userRouter.get('/addyourself', (req,res) => {
  res.render('template/addYourself', {})
})








module.exports = {
  userRouter
}
