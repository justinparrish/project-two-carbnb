
const mongoose = require('./connection.js')



const CarSchema = new mongoose.Schema ({

})

const CarCollection = mongoose.model('Car', CarSchema)




function getHelloWorldString() {
  return 'What kind of car you have?'
}







module.exports = {
  getHelloWorldString
}
