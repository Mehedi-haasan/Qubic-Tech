const controller = require("../controllers/company.profile.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/get/company/info", controller.getCompanyInfo);
    // app.get("/api/get/contact/:id", controller.getEmployee);
    app.post("/api/create/company/info", controller.createCompanyInfo);
    app.put("/api/update/contact/:id", controller.UpdateCompanyInfo);
    app.delete("/api/delete/contact/:id", controller.deleteCompanyInfo);

};