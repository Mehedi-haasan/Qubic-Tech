const db = require("../models");
const config = require("../config/db.config");
const State = db.state;

const Op = db.Sequelize.Op;


exports.getState = async (req, res) => {
    try {
       let data = await State.findAll({})
        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}



exports.createState = async (req, res) => {
      try {
        await State.create({
          year: req.body.year,
          customer: req.body.customer,
          project:req.body.project,
          awards:req.body.awards
      });
      res.status(200).send({
        success: true,
        message:"Create Successfully"
      })

      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }

}


exports.UpdateState = async (req, res) => {
      const values={
        year: req.body.year,
        customer: req.body.customer,
        project:req.body.project,
        awards:req.body.awards
    }

    try {
        await State.update(values, {
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

// exports.deleteEmployee = async (req, res) => {

//   try {


//         await Employee.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });


//       res.status(200).send({
//         success: true,
//         message:"Delete Successfully"
//       })

//   } catch (error) {
//     res.status(500).send({ success: false, message: error.message });
//   }

// }


