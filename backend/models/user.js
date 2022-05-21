/**
 * Modelo Usuario
 */

 const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

// const SchemaTypes = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({

  username: { type: String },

  password: { type: String },
 
  name: { type: String },
 
  dni: { type: Number },
  
  email:{ type: String },
 
  phone: { type: Number },
  
  roles:{
    type:['Cliente', 'Propietario'],
    default: 'Cliente'
  }
  
  // booking: {
  //   type: SchemaTypes.ObjectId,
  //   ref: 'booking'
  // }
},{
  timestamps: true
})

module.exports = mongoose.model('user', UserSchema)