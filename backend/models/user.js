const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

let UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // owner: {
  //   type: Boolean,
  //   required: true
  // }
})

let UserModel = mongoose.model('user', UserSchema)

module.exports = { UserModel }