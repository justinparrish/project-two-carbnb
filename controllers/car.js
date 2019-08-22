
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

module.exports = {
  carRouter
}
