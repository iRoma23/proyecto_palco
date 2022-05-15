const { UserModel } = require('../models/user')
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
  static list(req, res) { 
    UserModel.findAll()  //funcion callback
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) =>{
            res.status(404).send({
                message: err.message
            })
        })
}

}

module.exports = { UserController }