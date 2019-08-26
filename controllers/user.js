
const express = require('express')
const userApi = require('../models/user.js')

const userRouter = express.Router()


//user/cars/carsListing


//to load home page
userRouter.get('/', (req,res) => {
  res.render('template/homePage')
})

// //to load rentee button link
userRouter.get('/useradd', (req,res) => {
  res.render('template/users/useradd', {})
})

//to list users in carListing
userRouter.get('/cars/userListing', (req,res) => {
  userApi.findUsers().then((allUsers) => {
    console.log('USER')
    console.log(allUsers)
    res.render('template/users/userListing', {allUsers})
  })
})

//to find a use to edit
userRouter.get('/:userId', (req,res) => {
  userApi.findUser(req.params.userId).then(oneUser => {
    res.render('template/users/editUser', {oneUser ,userId :req.params.userId})
  })
})

//to add a user to carListing page
userRouter.post('/cars/userListing', (req,res) => {
  userApi.addUser(req.body).then(() => {
    res.render('template/users/userListing')
  })
})

//to update a user
userRouter.put('/:userId', (req,res) => {
  userApi.editUser(req.params.userId, req.body).then(() => {
    res.render('template/users/userListing')
  })
})

//to delete a user
userRouter.delete('/:userId', (req,res) => {
  userApi.deleteUser(req.params.userId).then(() => {
    res.render('template/homePage')
  })
})







module.exports = {
  userRouter
}
