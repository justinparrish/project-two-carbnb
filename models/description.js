
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




function getHelloWorldString() {
  return 'More about your car?'
}


module.exports = {
  getHelloWorldString
}
