const db = require("../models");
const config = require("../config/db.config");
const Work = db.work;

const Op = db.Sequelize.Op;


exports.getWork = async (req, res) => {
    try {
       let work = await Work.findAll({})
        res.status(200).send({
            success: true,
            items: work,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}



exports.createWork = async (req, res) => {
      try {
        await Work.create({
          acitve: 1,
          name: req.body.name,
          image_url: req.body.image_url,
      });
      res.status(200).send({
        success: true,
        message:"Create Successfully"
      })

      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }

}


exports.UpdateWork = async (req, res) => {
      const values={
        acitve: 1,
        name: req.body.name,
        image_url: req.body.image_url,
    }
    console.log(values)
    try {
        await Work.update(values, {
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


