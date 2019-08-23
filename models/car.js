
const mongoose = require('./connection.js')



const CarSchema = new mongoose.Schema ({
  name: String,
  year: Number,
  make: String,
  model: String

})

const CarCollection = mongoose.model('Car', CarSchema)


// const createCar = () => {
//   return CarCollection.create({
//     name: '',
//     year: 2000,
//     make: '',
//     model: ''
//   })
// }

const addCar = (newCar) => {
  return CarCollection.insertMany([newCar])
}

const getCar = (vinNum) => {
  return CarCollection.findById({_id: vinNum})
}

const getCars = () => {
  return CarCollection.find()
}

const editCar = (vinNum, updatedCar) => {
  return CarCollection.updateOne({_id: vinNum}, updatedCar)
}

const deleteCar = (vinNum) => {
  return CarCollection.findByIdAndDelete({_id: vinNum})
}




module.exports = {
  addCar,
  // createCar,
  deleteCar,
  editCar,
  getCar,
  getCars
  
}
