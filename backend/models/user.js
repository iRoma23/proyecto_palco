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
  email:{
    type: String,
    required: true
  }
})

let UserModel = mongoose.model('user', UserSchema)

module.exports = { UserModel }