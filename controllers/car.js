
const express = require('express')

const carApi = require('../models/car.js')

const userRouter = express.Router()
const carRouter = express.Router()



// carRouter.get('/carlisting', (req,res) => {
//   res.render('template/carListing')
// })




carRouter.get('/renteecar', (req,res) => {
  res.render('template/cars/addCar', {})
})

carRouter.get('/userListing', (req,res) => {
  carApi.getCars().then((allCars) => {
    console.log('CARS')
    console.log(allCars)
    res.render('template/cars/userListing', {allCars})
  })
})


//to get car 
carRouter.get('/:vinNum', (req,res) => {
  carApi.getCar(req.params.vinNum).then(oneCar => {
    res.render('template/cars/editCar', {oneCar, vinNum: req.params.vinNum})
  })
})


userRouter.post('/carsListing', (req,res) => {
  carApi.addCar(req.body).then(() => {
    res.render('template/cars/userListing')
  })
})


carRouter.put('/:vinNum', (req,res) => {
  carApi.editCar(req.params.vinNum, req.body).then(() => {
    res.render('/template/cars/userListing')
  })
})

carRouter.delete('/:vinNum', (req,res) => {
  carApi.deleteCar(req.params.vinNum).then(() => {
    res.render('template/homePage')
  })
})






module.exports = {
  carRouter,
  userRouter
}
