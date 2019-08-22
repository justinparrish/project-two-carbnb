
const mongoose = require('./connection.js')



const CarSchema = new mongoose.Schema ({
  name: Array,
  year: Number,
  make: String,
  model: String

})

const CarCollection = mongoose.model('Car', CarSchema)




function getHelloWorldString() {
  return 'What kind of car you have?'
}







module.exports = {
  getHelloWorldString
}
