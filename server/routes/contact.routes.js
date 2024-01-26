const controller = require("../controllers/contact.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/get/user/ques", controller.getContact);
    // app.get("/api/get/contact/:id", controller.getEmployee);
    app.post("/api/create/contact", controller.createContact);
    app.put("/api/update/contact/:id", controller.UpdateContact);
    app.delete("/api/delete/contact/:id", controller.deleteContact);

};