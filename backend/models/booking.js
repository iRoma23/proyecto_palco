/**
 * Modelo Reserva
 */

const mongoose = require('mongose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

BookingSchema = mongoose.Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'user'
  },
  event: {
    type: SchemaTypes.ObjectId,
    ref: 'event'
  },
  observacion: {
    type: String,
    required: true
  },
  credit: {
    type: ['credito','debito'],
    default: 'credito',
    required: true
  }
})

let BookingBoxModel = mongoose.model('booking', BookingBoxSchema)

module.exports = { BookingBoxModel }