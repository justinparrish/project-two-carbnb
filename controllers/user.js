
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()

 
userRouter.get('/', (req, res) => {
  res.send(userApi.getHelloWorldString())
})


module.exports = {
  userRouter
}
