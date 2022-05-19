/**
 * Modelo Reserva
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

BookingSchema = new mongoose.Schema({
  booked: {
    type: ['Disponible', 'Reservado'],
    default: 'Disponible'
  }, 

  event: {
    // type: mongoose.Types.ObjectId,
    type: SchemaTypes.ObjectId,
    ref:'event'
  
  },
  

})



module.exports = mongoose.model('booking', BookingSchema)