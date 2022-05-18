/**
 * Modelo Evento
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const EventSchema = new mongoose.Schema({

  eventname: { type: String },

  //  image: {
  //    type: String,
  //    required: true
  //  },

  date: { type: Date },

  stadium: { type: String },

  description: { type: String },

  // mediaId: {
  //   type: mongoose.Types.ObjectId,
  // },

},

  {
    timestamps: true
  })
 

module.exports = mongoose.model('event', EventSchema)
