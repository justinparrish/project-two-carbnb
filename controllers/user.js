
const express = require('express')
const userApi = require('../models/user.js')

const userRouter = express.Router()





//to load home page
userRouter.get('/', (req,res) => {
  res.render('template/homePage')
})

// //to load rentee button link
userRouter.get('/renteeadd', (req,res) => {
  res.render('template/renteeAdd', {})
})

//to list users in carListing
userRouter.get('/cars/carsListing', (req,res) => {
  userApi.findUsers().then((allUsers) => {
    res.render('template/carListing', {allUsers})
  })
})

//to find a use to edit
userRouter.get('/:id', (req,res) => {
  userApi.findUser(req.params.id).then(() => {
    res.send('edit user')
  })
})

//to add a user to carListing page
userRouter.post('/cars/carListing', (req,res) => {
  userApi.addUser(req.body).then(() => {
    res.render('template/carListing')
  })
})

//to update a user
userRouter.put('/:id', (req,res) => {
  userApi.editUser(req.params.id, req.body).then(() => {
    res.send(200)
  })
})

//to delete a user
userRouter.delete('/:id', (req,res) => {
  userApi.deleteUser(req.params.id).then(() => {
    res.send(200)
  })
})







module.exports = {
  userRouter
}
