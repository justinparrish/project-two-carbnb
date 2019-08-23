
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


const findUser = (id) => {
  return UserCollection.findById(id)
}

const editUser = (userId, updatedInfo) => {
  return UserCollection.updateOne({_id: userId}, updatedInfo)
}

const deleteUser = (id) => {
  return UserCollection.findByIdAndDelete(id)
}

const deleteAllUsers = () => {
  return UserCollection.deleteMany()
}


// const linkToCar = () => {

// }

module.exports = {
  addUser,
  createUser,
  deleteAllUsers,
  deleteUser,
  editUser,
  findUser,
  findUsers
  // linkToCar
}
