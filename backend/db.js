/**
 * Modelo Reserva
 */

const mongoose = require("mongoose");

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types
//Modulo Reserva
var BookingSchema = mongoose.Schema({
  booked: {
    type: Boolean,
    required: true,
  },
  event: {
    type: SchemaTypes.ObjectId,
    ref: "event",
  },
});
//Modulo Evento
var EventSchema = mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{
  timestamps: true
});
//Modulo Propietario de palco
var OwnerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  email:{
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  stadium: {
    type: String,
    required: true
  },
  privatebox: {
    type: SchemaTypes.ObjectId,
    ref: 'privatebox'
  },
  booking: {
    type: SchemaTypes.ObjectId,
    ref: 'booking'
  }
},{
  timestamps: true
})
//Modulo Palco
var BoxSchema = mongoose.Schema({
  box: {
    type: String,
    required: true
  },
  stadium: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'owner'
  }
},{
  timestamps: true
})
//Modulo Usuario
var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  booking: {
    type: SchemaTypes.ObjectId,
    ref: 'booking'
  }
},{
  timestamps: true
})

var BookingBoxModel = mongoose.model("booking", BookingSchema);
var EventModel = mongoose.model("event", EventSchema);
var OwnerModel = mongoose.model("owner", OwnerSchema);
var BoxModel = mongoose.model("box", BoxSchema);
var UserModel = mongoose.model("user", UserSchema);

module.exports = { BookingBoxModel, EventModel, OwnerModel, BoxModel, UserModel };
