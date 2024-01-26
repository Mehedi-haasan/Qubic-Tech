const db = require("../models");
const config = require("../config/db.config");
const Company = db.company;

const Op = db.Sequelize.Op;

exports.getCompanyInfo= async (req, res) => {
  try {
    let data = await Company.findAll({});
    res.status(200).send({
      success: true,
      items: data,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.createCompanyInfo= async (req, res) => {
  try {
    await Company.create({
      acitve: 1,
      name: req.body.name,
      image_url: req.body.image_url,
      address:req.body.address,
      mobile:req.body.mobile,
      email:req.body.email,
      description:req.body.description,
      whatsapp:req.body.whatsapp,
      instagram:req.body.instagram,
      facebook:req.body.facebook,
      twitter:req.body.twitter,
    });
    res.status(200).send({
      success: true,
      message: "Create Successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.UpdateCompanyInfo= async (req, res) => {
  const values = {
    acitve: 1,
    name: req.body.name,
    image_url: req.body.image_url,
    address:req.body.address,
    mobile:req.body.mobile,
    email:req.body.email,
    description:req.body.description,
    whatsapp:req.body.whatsapp,
    instagram:req.body.instagram,
    facebook:req.body.facebook,
    twitter:req.body.twitter,
  };

  try {
    await Company.update(values, {
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

exports.deleteCompanyInfo= async (req, res) => {
  try {
    await Company.destroy({
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
