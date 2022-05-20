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
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  }
  // document: {
  //   type: Number,
  //   required: true
  // }
})

let OwnerModel = mongoose.model('owner', OwnerSchema)

module.exports = { OwnerModel }