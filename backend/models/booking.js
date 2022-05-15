/**
 * Modelo Reserva
 */

const mongoose = require('mongose')

// Direccion de la base de datos
// mongoose.connect('')

BookingSchema = mongoose.Schema({
  date: {
    type: Number,
    required: true,
  }
})