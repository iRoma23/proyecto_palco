/**
 * Modelo Reserva
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

BookingSchema = mongoose.Schema({
  booked: {
    type: Boolean,
    required: true,
  },
  event: {
    type: SchemaTypes.ObjectId,
    ref: 'event'
  }
})



module.exports = mongoose.model('booking', BookingSchema)