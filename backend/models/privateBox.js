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
  stadium: {
    type: String,
    required: true
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'owner'
  },
  category: {
    type: String,
    required: true
  }
})

let PrivateBoxModel = mongoose.model('privateBox', PrivateBoxSchema)

module.exports = { PrivateBoxModel }