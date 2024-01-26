const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = require("./models");
require("./routes/user.routes")(app);
require("./routes/work.routes")(app);
require("./routes/employee.routes")(app);
require("./routes/progress.routes")(app);
require("./routes/state.roures")(app);
require("./routes/contact.routes")(app);
require("./routes/company.profile.routes")(app);

const Role = db.role;
const state = db.state;

// db.sequelize.sync({ force: true }).then(async () => {
//     // await initStates();
//        await initUserRoles();
//        await initUserState();
//     // await initCarousel();
//     // await initCategories();
//     // await initProductAttributes();
//     // await initProductAttributeValues();
// });

async function initUserRoles() {
  // roles
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });

  Role.create({
    id: 3,
    name: "superadmin",
  });
  Role.create({
    id: 4,
    name: "modarator",
  });
}
async function initUserState() {
  // roles
  state.create({
    year: 2,
    customer: 60,
    project: 50,
    awards: 3,
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
