
const mongoose = require('./connection.js')



const CarSchema = new mongoose.Schema ({
  year: Number,
  make: String,
  model: String

})

const CarCollection = mongoose.model('Car', CarSchema)


// const createCar = () => {
//   return CarCollection.create({
//     year: 2000,
//     make: '',
//     model: ''
//   })
// }

const addCar = (newCar) => {
  return CarCollection.insertMany([newCar])
}

const getCar = (id) => {
  return CarCollection.findById(id)
}

const getCars = () => {
  return CarCollection.find()
}

const editCar = (vinNum, updatedCar) => {
  return CarCollection.updateOne({_id: vinNum}, updatedCar)
}

const deleteCar = (id) => {
  return CarCollection.findByIdAndDelete(id)
}

const deleteAllCars = () => {
  return CarCollection.deleteMany()
}



module.exports = {
  addCar,
  // createCar,
  deleteAllCars,
  deleteCar,
  editCar,
  getCar,
  getCars
  
}
