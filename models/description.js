
const mongoose = require('./connection.js')



const DescriptionSchema = new mongoose.Schema({
  color: String,
  comfort: String,
  seats: Number,
  mpg: Number,
  childFriendly: Boolean,
  accident: Boolean,
  smoker: Boolean

})

const DescriptionCollection = mongoose.model('Description', DescriptionSchema)

const createDescription = () => {
  return DescriptionCollection.create({
    color: '',
    comfort: '',
    seats: 4,
    mpg: 18,
    childFriendly: true,
    accident: false,
    smoker: false
  })
}

const addDescription = (newDescription) => {
  return DescriptionCollection.insertMany( [newDescription] )
}

const getDescription = (id) => {
  return DescriptionCollection.findById(id)
}

const getDescriptions = () => {
  return DescriptionCollection.find()
}

const editDescription = (descriptId, updatedDescript => {
  return DescriptionCollection.updateOne({_id: descriptId}, updatedDescript)
}

const deleteDescription = (id) => {
  return DescriptionCollection.findByIdAndDelete(id)
}

const deleteAllDescript = () => {
  return DescriptionCollection.deleteMany()
}


module.exports = {
  addDescription,
  createDescription,
  deleteAllDescript,
  deleteDescription,
  editDescription,
  getDescription,
  getDescriptions
}
