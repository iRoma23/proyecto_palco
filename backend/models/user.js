/**
 * Modelo Usuario
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

let UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dni: {
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

let UserModel = mongoose.model('user', UserSchema)

module.exports = { UserModel }