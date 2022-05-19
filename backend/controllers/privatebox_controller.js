const { BoxModel } = require("../db");

class BoxController {

  static list(req, res) {
    BoxModel.find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message,
        });
      });
  }

  static create(req, res) {
    let data = req.body;

    BoxModel.create(data)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message,
        });
      });
  }
}

module.export = { BoxController };
