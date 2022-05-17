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
  box: {
    type: String,
    required: true
  },
  stadium: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  dni:{ //DNI
    type: Number,
    required: true
  },
  email:{
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  booking: {
    type: SchemaTypes.ObjectId,
    ref: 'booking'
  }
})

let OwnerModel = mongoose.model('privateBox', OwnerSchema)

module.exports = { OwnerModel }