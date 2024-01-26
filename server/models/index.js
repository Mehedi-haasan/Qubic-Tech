const config = require("../config/db.config");



const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.state = require("./state.model")(sequelize, Sequelize);
db.employee = require("./employee.model")(sequelize, Sequelize);
db.work = require("./work.model")(sequelize, Sequelize);
db.contact = require("./contact.model")(sequelize, Sequelize);
db.progress = require("./progress.model")(sequelize, Sequelize);
db.company = require("./company.profile.model")(sequelize, Sequelize);




module.exports = db;