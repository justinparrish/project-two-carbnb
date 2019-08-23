
const express = require('express')

const carApi = require('../models/car.js')

const carRouter = express.Router()

carRouter.get('/carlisting', (req,res) => {
  res.render('template/carListing')
})

carRouter.get('/:index', (req,res) => {
  carApi.getCar(req.params.index).then(() => {
    res.send(200)
  })
})

carRouter.get('/', (req,res) => {
  carApi.getCars().then(() => {
    res.send(200)
  })
})

carRouter.post('/', (req,res) => {
  carApi.addCar().then(() => {
    res.send(200)
  })
})

carRouter.put('/:index', (req,res) => {
  carApi.editCar(req.params.index, req.body).then(() => {
    res.send(200)
  })
})

carRouter.delete('/:index', (req,res) => {
  carApi.deleteCar(req.params.index).then(() => {
    res.send(200)
  })
})






module.exports = {
  carRouter
}
