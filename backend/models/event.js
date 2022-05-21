/**
 * Modelo Evento
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const EventSchema = new mongoose.Schema({

  eventname: { type: String },

  date: { type: Date },

  stadium: { type: String },

  description: { type: String },

  image: { type: String },
    
  

},{
    timestamps: true
})


module.exports = mongoose.model('event', EventSchema)
