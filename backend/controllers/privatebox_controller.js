const { PrivateBoxModel } = require('../models/privatebox')

class PrivateBoxController {

  static recordBox(req, res) {

    let data = req.body

    PrivateBoxModel.create(data)
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message
        })
      })
  }

}

module.exports = { PrivateBoxController }