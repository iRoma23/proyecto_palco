const { UserModel } = require('../db')

class UserController {

  static create(req, res) {
      
    let username = req.body.username
    let password = req.body.password

    let newUser = new UserModel({
      username: username,
      password: password
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
  
}

module.exports = { UserController }