//importamos el modelo de event
const { eventModel } = require('../models')


//importamos el file system
const fs = require('fs')
const path = require('path')

const getEvents = async (req, res) => {
    try {
        const event = await eventModel.find()
        // res.json(event)        
        res.send({ event, 'message': 'Lista de eventos' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los eventos' })
    }

}

const getEvent = async (req, res) => {
    try {
        const pk = req.params.id

        const event = await eventModel.findById(pk)
        res.send({ event, 'message': 'lista evento detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el evento' })
    }

}

const createEvent = async (req, res) => {
    try {
        const { eventname, date, stadium, description } = req.body
        const image = req.file

        if(image){
            const event = await eventModel.create({
                eventname,
                date,
                stadium,
                description,
                image: image.path
            })
            await event.save()
            res.send({ event, 'message': 'Evento creado' })
        }else{
            const event = await eventModel.create({
                eventname,
                date,
                stadium,
                description,
                image: null
                
            })
            await event.save()            
            res.send({ event, 'message': 'Evento creado' })
        }
       
    } catch (error) {
        res.status(404).send({ message: 'Error al crear el evento' })
    }
}

const deleteEvent = async (req, res) => {
    try {
        const pk = req.params.id
        const event = await eventModel.findByIdAndDelete(pk)

        if (event) {
            await fs.unlinkSync(path.resolve(event.image))
            res.send({ event, 'message': 'Evento eliminado' })
        }
       
    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el evento' })
    }

}

const updateEvent = async (req, res) => {
    try {

        const pk = req.params.id
        const { eventname, date, stadium, description } = req.body
        const image = req.file

        if (image) {
            const event = await eventModel.findByIdAndUpdate(
                pk,
                { eventname, date, stadium, description, image: req.file.path },
                { new: true }
            )
            res.send({ event, 'message': 'Evento Actualizado' })
        } else {
            const event = await eventModel.findByIdAndUpdate(
                pk,
                { eventname, date, stadium, description },
                { new: true }
            )
            res.send({ event, 'message': 'Evento Actualizado' })
        }

    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el evento' })

    }
}

module.exports = { getEvents, getEvent, createEvent, deleteEvent, updateEvent }