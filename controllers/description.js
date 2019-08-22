
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptonRouter = express.Router()


descriptonRouter.get('/describecar', (req, res) => {
  res.render('template/describeCar.hbs', {})
})


module.exports = {
    descriptonRouter
}
