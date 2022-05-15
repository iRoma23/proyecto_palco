/**
 * Modelo Propietario del Palco
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

let OwnerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  document:{ //DNI
    type: Number,
    required: true
  },
  property_number: {
    type: Number,
    required: true
  },
  estadio: {
    type: String,
    required: true
  }
})

let OwnerModel = mongoose.model('privateBox', OwnerSchema)

module.exports = { OwnerModel }