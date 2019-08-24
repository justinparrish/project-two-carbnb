
const express = require('express')

const carApi = require('../models/car.js')


const carRouter = express.Router()



// carRouter.get('/carlisting', (req,res) => {
//   res.render('template/carListing')
// })






carRouter.get('/carsListing', (req,res) => {
  carApi.getCars().then((allCars) => {
    console.log(allCars)
    res.render('template/carListing', {allCars})
  })
})


//to get car 
carRouter.get('/:vinNum', (req,res) => {
  carApi.getCar(req.params.vinNum).then(oneCar => {
    res.render('template/editCar', {oneCar, vinNum: req.params.vinNum})
  })
})


carRouter.post('/carsListing', (req,res) => {
  carApi.addCar(req.body).then(() => {
    res.render('template/carListing')
  })
})


carRouter.put('/:vinNum', (req,res) => {
  carApi.editCar(req.params.vinNum, req.body).then(() => {
    res.render('/template/carListing')
  })
})

carRouter.delete('/:vinNum', (req,res) => {
  carApi.deleteCar(req.params.vinNum).then(() => {
    res.render('template/homePage')
  })
})






module.exports = {
  carRouter
}
