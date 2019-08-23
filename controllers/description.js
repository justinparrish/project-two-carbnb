
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptionRouter = express.Router()


descriptionRouter.get('/:index', (req,res) => {
  descriptionApi.getDescription(req.params.index).then(() => {
    res.send(200)
  })
})

descriptionRouter.get('/', (req,res) => {
  descriptionApi.getDescriptions().then(() => {
    res.send(200)
  })
})

descriptionRouter.post('/', (req,res) => {
  descriptionApi.addDescription().then(() => {
    res.send(200)
  })
})

descriptionRouter.put('/:index', (req,res) => {
  descriptionApi.editDescription().then(() => {
    res.send(200)
  })
})

descriptionRouter.delete('/:index', (req,res) => {
  descriptionApi.deleteDescription().then(() => {
    res.send(200)
  })
})


module.exports = {
    descriptionRouter
}
