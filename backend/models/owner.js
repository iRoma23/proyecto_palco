/**
 * Modelo Propietario del Palco
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

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
<<<<<<< HEAD
  name:{
    type: String,
    required: true
  },
  dni:{ //DNI
=======
  name: {
    type: String,
    required: true
  },
  dni: {
>>>>>>> e894b160f62bc420034387a4f579b42d90b2feac
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