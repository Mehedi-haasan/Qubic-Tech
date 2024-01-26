const db = require("../models");
const config = require("../config/db.config");
const Progress = db.progress;

const Op = db.Sequelize.Op;


exports.getProgress = async (req, res) => {
    try {
       let data = await Progress.findAll({})
        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}



exports.createProgress = async (req, res) => {
      try {
        await Progress.create({
          percent:req.body.percent,
          name: req.body.name,
      });
      res.status(200).send({
        success: true,
        message:"Create Successfully"
      })

      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }

}


exports.UpdateProgress = async (req, res) => {
      const values={
        percent:req.body.percent,
        name: req.body.name,
    }

    try {
        await Progress.update(values, {
            where: {
                id: req.params.id
            }
          });


        res.status(200).send({
          success: true,
          message:"Update Successfully"
        })

    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }

}

exports.deleteProgress = async (req, res) => {

  try {


        await Progress.destroy({
            where: {
                id: req.params.id
            }
        });


      res.status(200).send({
        success: true,
        message:"Delete Successfully"
      })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}


