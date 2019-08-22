
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptonRouter = express.Router()


descriptonRouter.get('/', (req, res) => {
  res.send(descriptionApi.getHelloWorldString())
})


module.exports = {
    descriptonRouter
}
