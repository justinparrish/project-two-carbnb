
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptionRouter = express.Router()


descriptionRouter.get('/describecar', (req, res) => {
  res.render('template/describeCar.hbs', {})
})

descriptionRouter.post('/', (req,res) => {
  descriptionApi.addDescription(req.body).then(() => {
    res.send('Post listing')
  })
})


module.exports = {
    descriptionRouter
}
