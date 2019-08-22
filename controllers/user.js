
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  res.render('layout')
})

userRouter.get('/addyourself', (req,res) => {
  res.render('template/addYourself', {})
})

userRouter.get('/addcar', (rew))


userRouter.get('/:id', (req,res) => {
  res.send(userApi.findUser())
})

userRouter.put('/:id', (req,res) => {
  res.send(userApi.addUser())
})

userRouter.post('/', (res,req) => {
  res.send(userApi.editUser())
})

userRouter.delete('/:id', (res,req) => {
  res.send(userApi.deleteUser())
})





module.exports = {
  userRouter
}
