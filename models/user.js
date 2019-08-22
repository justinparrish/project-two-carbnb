
const mongoose = require('./connection.js')



const UserSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String
 
})

const UserCollection = mongoose.model('User', UserSchema)
 


const createUser = () => {
  return UserCollection.create({
    name: '',
    location: '',
    email: ''
  })
}

const findUser = () => {
  return UserCollection.findOne({
    name
  })
}

const editUser = (name, {updateInfo}) => {
  return UserCollection.findOneAndUpdate(
    name, {updateInfo}
  )
}

const deleteUser = (name) => {
  return UserCollection.findByIdAndDelete({
    name
  })
}

const linkToCar = () => {

}

module.exports = {
  createUser,
  deleteUser,
  editUser,
  findUser,
  linkToCar
}
