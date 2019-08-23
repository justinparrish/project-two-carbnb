
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptionRouter = express.Router()


descriptionRouter.get('/:id', (req,res) => {
  descriptionApi.getDescription(req.params.id).then(() => {
    res.send(200)
  })
})

descriptionRouter.get('/', (req,res) => {
  descriptionApi.getDescriptions().then(() => {
    res.send(200)
  })
})

descriptionRouter.post('/', (req,res) => {
  descriptionApi.addDescription(req.body).then(() => {
    res.send(200)
  })
})

descriptionRouter.put('/:id', (req,res) => {
  descriptionApi.editDescription(req.params.id, req.body).then(() => {
    res.send(200)
  })
})

descriptionRouter.delete('/:id', (req,res) => {
  descriptionApi.deleteDescription(req.params.id).then(() => {
    res.send(200)
  })
})


module.exports = {
    descriptionRouter
}
