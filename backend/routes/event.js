const express = require('express')
const router = express.Router() 

//importamos el manejador de Imagenes
// const {uploadImage} = require('../utils/handleImage')
const uploadFile =  require('../utils/handleImage')

//requerimos el controlador
const { getEvents, getEvent, createEvent, deleteEvent, updateEvent } = require('../controllers/eventControllers')

router.get('/', getEvents)
router.post('/', uploadFile.single('image'), createEvent)

router.get('/:id', getEvent)
router.delete('/:id', deleteEvent)
router.put('/:id', uploadFile.single('image'), updateEvent)

module.exports = router