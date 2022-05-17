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
<<<<<<< HEAD
  email: {
    type: String,
    required: true
  },
  name: {
=======
  name: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  email:{
>>>>>>> e894b160f62bc420034387a4f579b42d90b2feac
    type: String,
    required: true
  },
  phone: {
    type: Number,
<<<<<<< HEAD
    required: false
  },
  city: {
    type: String,
    required: false
  }

  // owner: {
  //   type: Boolean,
  //   required: true
  // }
=======
    required: true
  },
  booking: {
    type: SchemaTypes.ObjectId,
    ref: 'booking'
  }
>>>>>>> e894b160f62bc420034387a4f579b42d90b2feac
})

let UserModel = mongoose.model('user', UserSchema)

module.exports = { UserModel }