
const express = require('express')

const carApi = require('../models/car.js')

const carRouter = express.Router()

 
carRouter.get('/addcar', (req,res) => {
  res.render('template/addCar.hbs', {})
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

module.exports = {
  carRouter
}
