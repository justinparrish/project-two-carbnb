
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptionRouter = express.Router()


descriptionRouter.get('/addDescript', (req,res) => {
  res.render('template/description/addDescript')
})


descriptionRouter.get('/:descriptId', (req,res) => {
  descriptionApi.getDescription(req.params.descriptId).then(oneD => {
    res.render('/template/description/editeDescript', {oneD, descriptId: req.params.descriptId})
  })
})

descriptionRouter.get('/search', (req,res) => {
  descriptionApi.getDescriptions().then((allDescripts) => {
    console.log('DESCRIPTIONS')
    console.log(allDescripts)
    res.render('template/description/descriptSearch', {allDescripts})
  })
})

descriptionRouter.post('/search', (req,res) => {
  descriptionApi.addDescription(req.body).then(() => {
    res.render('template/description/descriptSearch')
  })
})

descriptionRouter.put('/:descriptId', (req,res) => {
  descriptionApi.editDescription(req.params.descriptId, req.body).then(() => {
    res.render('template/description/descriptSearch')
  })
})

descriptionRouter.delete('/:descriptId', (req,res) => {
  descriptionApi.deleteDescription(req.params.descriptId).then(() => {
    res.render('template/homePage')
  })
})


module.exports = {
    descriptionRouter
}
