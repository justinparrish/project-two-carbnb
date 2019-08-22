
const express = require('express')

const carApi = require('../models/car.js')

const carRouter = express.Router()

 
carRouter.get('/', (req,res) => {
  carApi.getCars().then((allCars) => {
    res.send(allCars)
  })
})


module.exports = {
  carRouter
}
