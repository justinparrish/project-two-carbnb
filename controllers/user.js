
const express = require('express')


const userApi = require('../models/user.js')


const userRouter = express.Router()


userRouter.get('/:index', (req,res) => {
  userApi.findUser(req.params.index).then(() => {
    res.send(200)
  })
})

userRouter.get('/', (req,res) => {
  userApi.findUsers().then(() => {
    res.send(200)
  })
})

userRouter.post('/', (req,res) => {
  userApi.addUser().then(() => {
    res.send(200)
  })
})

userRouter.put('/:index', (req,res) => {
  userApi.editUser(req.params.index, req.body).then(() => {
    res.send(200)
  })
})

userRouter.delete('/:index', (req,res) => {
  userApi.deleteUser(req.params.index).then(() => {
    res.send(200)
  })
})







module.exports = {
  userRouter
}
