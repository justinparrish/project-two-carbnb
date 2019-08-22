
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

const getDescription = (descriptionId) => {
  return DescriptionCollection.findById({_id: descriptionId})
}

const getDescriptions = () => {
  return DescriptionCollection.find()
}

const editDescription = (descriptionId, updatedDescription) => {
  return DescriptionCollection.updateOne({_id: descriptionId}, updatedDescription)
}

const deleteDescription = (descriptionId) => {
  return DescriptionCollection.findByIdAndDelete({_id: descriptionId})
}


module.exports = {
  addDescription,
  createDescription,
  deleteDescription,
  editDescription,
  getDescription,
  getDescriptions
}
