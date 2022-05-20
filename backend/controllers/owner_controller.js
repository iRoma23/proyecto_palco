const { OwnerModel } = require('../models/owner')

class OwnerController {

  // static create(req, res) {

  //   let username = req.body.username
  //   let privatebox = req.body.privatebox

  //   let newUser = new OwnerModel({
  //     username: username,
  //     privatebox: privatebox
  //   })

  //   newUser.save((err) => {
  //     if (err) {  
  //         res.send({
  //             message: err.message
  //         })
  //     } else {
  //         res.send("El usuario se ha registrado con exito!")
  //     }
  //   })
  // }

  static create(req, res) {
    let data = req.body

    // data['createdBy'] = req.user_id

    console.log("-----","Data: ",data)

    OwnerModel.create(data).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(400).send({
            message: err.message
        })
    })
  }

  static findAll(req, res) {
    
    OwnerModel.find({})
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      })
  }

}

module.exports = { OwnerController }