//importamos el modelo de event
const { eventModel } = require('../models')

const getEvents = async (req, res) => {
    try {
        const data = await eventModel.find({})
        res.send({ data, 'message': 'Lista de eventos' })
    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los eventos' })
    }

}

const getEvent = async (req, res) => {
    try {

        const { id } = req
        const data = await eventModel.findOne(id)//findById
        res.send({ data, 'message': 'lista evento detalle' })
    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el evento' })
    }

}

const createEvent = async (req, res) => {
    try {
    const { body } = req
    const data = await eventModel.create(body)
    console.log(body)
    res.send({ data, 'message': 'Evento creado' })

    } catch (error) {
        res.status(404).send({message: 'Error al crear el evento'})
    }
}

const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params
        
        const data = await eventModel.deleteOne({_id:id})
        
        res.send({ data, 'message': 'Evento eliminado' })
        
    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el evento' })
    }


}

const updateEvent = async (req, res) => {
    try {
        
        const {id} = req.params              
        const {body} = req         
     
        const data = await eventModel.updateOne({id:id}, body)
        res.send({ data, 'message': 'Evento Actualizado'})
    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el evento' })
        // console.log(message)
    }
}

module.exports = { getEvents, getEvent, createEvent, deleteEvent, updateEvent }