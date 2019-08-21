
const mongoose = require('./connection.js')



const DescriptionSchema = new mongoose.Schema({

})

const DescriptionCollection = mongoose.model('Description', DescriptionSchema)




function getHelloWorldString() {
  return 'More about your car?'
}


module.exports = {
  getHelloWorldString
}
