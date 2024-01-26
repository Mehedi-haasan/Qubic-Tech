const db = require("../models");
const config = require("../config/db.config");
const Contact = db.contact;

const Op = db.Sequelize.Op;

exports.getContact = async (req, res) => {
  try {
    let data = await Contact.findAll({});
    res.status(200).send({
      success: true,
      items: data,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    await Contact.create({
      acitve: 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    res.status(200).send({
      success: true,
      message: "Create Successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.UpdateContact = async (req, res) => {
  const values = {
    acitve: 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  try {
    await Contact.update(values, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      success: true,
      message: "Update Successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      success: true,
      message: "Delete Successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
