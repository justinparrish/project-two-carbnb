
const mongoose = require('./connection.js')



const UserSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String
 
})

const UserCollection = mongoose.model('User', UserSchema)
 


function getHelloWorldString() {
  return 'hell user'
}




module.exports = {
  getHelloWorldString
}
