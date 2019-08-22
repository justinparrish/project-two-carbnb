
const express = require('express')

const carApi = require('../models/car.js')

const carRouter = express.Router()

 
carRouter.get('/', (req, res) => {
  res.send(carApi.getHelloWorldString())
})


module.exports = {
  carRouter
}
