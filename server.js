
const express = require('express')
const app = express()
const methodOverride = require('method-override')


const { userRouter } = require('./controllers/user.js')
const { descriptonRouter } = require('./controllers/description.js')
const { carRouter } = require('./controllers/car.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname+"/public"))


app.set('view engine', 'hbs')



app.use('/user', userRouter)
app.use('/user/cars', carRouter)
app.use('/user/cars/description', descriptonRouter)


const PORT = process.env.PORT || 3000 


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
