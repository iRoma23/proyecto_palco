const Booking = require('../models/booking')

//CRUD

const getBookings = async (req, res) => {
  try {
    const data = await Booking.find()
    res.send({data, 'message': 'Lista de reservas'})
  } catch (error) {
    res.status(404).send({message: 'Error al obtener las reservas'})
  }

}

const getBooking = async (req, res) => {
  try {
    const data = await Booking.findById(req.id)
    res.send({data, 'message': 'lista reserva detalle'})
  } catch (error) {
    res.status(404).send({message: 'Error al obtener la reserva'})
  }

}

const createBooking = async (req, res) => {
  const body = new Booking(req.body)
  try {
    const data = await Booking.create(body)
    res.send({data, 'message': 'Reserva creada'})
  } catch (error) {
    res.status(500).send({message: 'Error al crear la reserva'})
  }
}


module.exports = { getBookings, getBooking, createBooking }