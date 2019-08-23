
const express = require('express')

const carApi = require('../models/car.js')
const userApi = require('../models/user.js')


const userRouter = express.Router()
const carRouter = express.Router()



carRouter.get('/carlisting', (req,res) => {
  res.render('template/carListing')
})

carRouter.get('/:id', (req,res) => {
  carApi.getCar(req.params.id).then(() => {
    res.send(200)
  })
})




carRouter.get('/', (req,res) => {
  carApi.getCars().then((allCars) => {
    res.render('template/carListing', {allCars})
  })
})

carRouter.post('/', (req,res) => {
  carApi.addCar(req.body).then(() => {
    res.render('template/carListing')
  })
})

userRouter.post('/cars/carListing', (req,res) => {
  userApi.addUser(req.body).then(() => {
    res.render('template/carListing')
  })
})

carRouter.put('/:id', (req,res) => {
  carApi.editCar(req.params.id, req.body).then(() => {
    res.send(200)
  })
})

carRouter.delete('/:id', (req,res) => {
  carApi.deleteCar(req.params.id).then(() => {
    res.send(200)
  })
})






module.exports = {
  carRouter,
  userRouter
}
