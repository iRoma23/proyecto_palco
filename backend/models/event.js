/**
 * Modelo Evento
 */

 const mongoose = require('mongoose')

 // Direccion de la base de datos
 // mongoose.connect('')
 
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
     type: String,
     required: true
   },
   description: {
     type: String,
     required: true
   }

 })
 
 let EventModel = mongoose.model('event', EventSchema)
 
 module.exports = { EventModel }