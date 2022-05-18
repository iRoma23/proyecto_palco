//requerimos express para poder trabajar con rutas
const express = require('express');
const router = express.Router();

//requerimos el controlador
const { getBooking, getBookings, createBooking } = require('../controllers/bookingControllers');

router.get('/', getBookings, (req, res) => {
    console.log('ruta get de booking')
})
router.post('/', createBooking)
router.get('/:id', getBooking)



module.exports = router;