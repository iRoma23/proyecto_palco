const { UserModel } = require('../models/user')

class UserController {

  static create(req, res) {
      
    let username = req.body.username
    let password = req.body.password
    let name = req.body.name
    let dni = req.body.dni
    let email = req.body.email
    let phone = req.body.phone

    let newUser = new UserModel({
      username: username,
      password: password,
      name: name,
      dni: dni,
      email: email,
      phone: phone
    })

    newUser.save((err) => {
      if (err) {  
          res.send({
              message: err.message
          })
      } else {
          res.send("El usuario se ha registrado con exito!")
      }
    })

  }

  static findAll(req, res) {
    UserModel.find({})
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

module.exports = { UserController }