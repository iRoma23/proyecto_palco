/**
 * Modelo Reserva
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

const BookingSchema = new mongoose.Schema({
  booked: {
    type: ['Disponible', 'Reservado'],
    default: 'Disponible'
  }, 

  event: {
    
    type: SchemaTypes.ObjectId,
    ref:'event'
  
  },
  

},{
  timestamps: true
})



module.exports = mongoose.model('booking', BookingSchema)