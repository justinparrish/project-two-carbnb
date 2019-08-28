
const express = require('express')


const descriptionApi = require('../models/description.js')


const descriptionRouter = express.Router()


descriptionRouter.get('/adddescript', (req,res) => {
  res.render('template/description/addDescript', {})
})


descriptionRouter.get('/search', (req,res) => {
  descriptionApi.getDescriptions().then((allDescripts) => {
    console.log('DESCRIPTIONS')
    console.log(allDescripts)
    res.render('template/description/descriptSearch', {allDescripts})
  })
})


descriptionRouter.get('/:descriptId', (req,res) => {
  descriptionApi.getDescription(req.params.descriptId).then(oneD => {
    res.render('template/description/editDescript', {oneD, descriptId: req.params.descriptId})
  })
})


descriptionRouter.post('/search', (req,res) => {
  descriptionApi.addDescription(req.body).then(() => {
    // res.render('template/description/descriptSearch')
    res.redirect('/user/cars/description/search')
  })
})

descriptionRouter.put('/:descriptId', (req,res) => {
  descriptionApi.editDescription(req.params.descriptId, req.body).then(() => {
    // res.render('template/description/descriptSearch')
    res.redirect('/user/cars/description/search')
  })
})

descriptionRouter.delete('/:descriptId', (req,res) => {
  descriptionApi.deleteDescription(req.params.descriptId).then(() => {
    // res.render('template/description/descriptSearch')
    res.redirect('/user/cars/description/search')
  })
})


module.exports = {
    descriptionRouter
}
