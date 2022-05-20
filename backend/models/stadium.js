/**
 * Modelo Stadium
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')
 
const SchemaTypes = mongoose.Schema.Types
 
let StadiumSchema = mongoose.Schema({
  stadiumname: {
    type: String,
    required: true
  },
  //  image: {
  //    type: String,
  //    required: true
  //  },
  city: {
    type: String,
    required: true
  },
  privatebox: {
    type: SchemaTypes.ObjectId,
    ref: 'stadium'
  }
})
  
let StadiumModel = mongoose.model('stadium', StadiumSchema)
  
module.exports = { StadiumModel }