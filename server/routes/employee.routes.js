const controller = require("../controllers/employee.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/get/employee", controller.getEmployee);
    app.post("/api/create/employee", controller.createEmployee);
    app.put("/api/update/employee/:id", controller.UpdateEmployee);
    app.delete("/api/delete/employee/:id", controller.deleteEmployee);

};