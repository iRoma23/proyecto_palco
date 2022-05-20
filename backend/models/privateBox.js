//Creo que este no va

/**
 * Modelo Palco
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

let PrivateBoxSchema = mongoose.Schema({
  box: {
    type: String,
    required: true
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'owner'
  }
})

let PrivateBoxModel = mongoose.model('privatebox', PrivateBoxSchema)

module.exports = { PrivateBoxModel }