const { EventModel } = require ('../db')

class EventController {

  static list(req, res) {
    EventModel.find({})
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      })
  }

    static create(req, res) {
      let data = req.body

      EventModel.create(data)
        .then((result) => {
          res.send(result)
      }).catch((err) =>{
          res.status(400).send({
            message: err.message
        })
      })    
    }

}

module.exports = { EventController }