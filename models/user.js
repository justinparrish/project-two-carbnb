
const mongoose = require('./connection.js')



const UserSchema = new mongoose.Schema({
 
})

const UserCollection = mongoose.model('User', UserSchema)
 


function getHelloWorldString() {
  return 'hell user'
}




module.exports = {
  getHelloWorldString
}
