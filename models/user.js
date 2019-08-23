
const mongoose = require('./connection.js')


const UserSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String
 
})

const UserCollection = mongoose.model('user', UserSchema)
 


const createUser = () => {
  return UserCollection.create({
    name: '',
    location: '',
    email: ''
  })
}

const addUser = (newUser) => {
  return UserCollection.insertMany( [newUser] )
}


const findUsers = () => {
  return UserCollection.find()
}


const findUser = (userId) => {
  return UserCollection.findById({_id: userId})
}

const editUser = (userId, updatedInfo) => {
  return UserCollection.updateOne({_id: userId}, updatedInfo)
}

const deleteUser = (userId) => {
  return UserCollection.findByIdAndDelete({_id: userId})
}

// const linkToCar = () => {

// }

module.exports = {
  addUser,
  createUser,
  deleteUser,
  editUser,
  findUser,
  findUsers
  // linkToCar
}
