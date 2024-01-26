const db = require("../models");
const config = require("../config/db.config");
const Employee = db.employee;

const Op = db.Sequelize.Op;


exports.getEmployee = async (req, res) => {
    try {
       let data = await Employee.findAll({})
        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}



exports.createEmployee = async (req, res) => {
      try {
        await Employee.create({
          acitve: 1,
          name: req.body.name,
          image_url: req.body.image_url,
          details:req.body.details
      });
      res.status(200).send({
        success: true,
        message:"Create Successfully"
      })

      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }

}


exports.UpdateEmployee = async (req, res) => {
      const values={
        acitve: 1,
        name: req.body.name,
        image_url: req.body.image_url,
        details:req.body.details
    }

    try {
        await Employee.update(values, {
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

exports.deleteEmployee = async (req, res) => {

  try {


        await Employee.destroy({
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


