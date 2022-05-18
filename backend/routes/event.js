const express = require('express')
const router = express.Router()

//requerimos el controlador
const { getEvents, getEvent, createEvent, deleteEvent, updateEvent } = require('../controllers/eventControllers')

router.get('/', getEvents)

router.post('/', createEvent)
router.get('/:id', getEvent)
router.delete('/:id', deleteEvent)
router.put('/:id', updateEvent)




module.exports = router