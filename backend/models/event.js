/**
 * Modelo Evento
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

let EventSchema = mongoose.Schema({
  eventname: {
    type: String,
    required: true
  },
  //  image: {
  //    type: String,
  //    required: true
  //  },
  date: {
    type: String,
    required: true
  },
  stadium: {
    type: SchemaTypes.ObjectId,
    ref: 'stadium'
  },
  description: {
    type: String,
    required: true
  },
  status: {
   type: String,
   required: true
  },
  price: {
    type: Number,
    required: true
  }
})
 
let EventModel = mongoose.model('event', EventSchema)
 
module.exports = { EventModel }