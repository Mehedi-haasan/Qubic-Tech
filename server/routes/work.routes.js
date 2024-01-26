const controller = require("../controllers/work.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/create/work", controller.createWork);
    app.get("/api/get/work", controller.getWork);
    app.put("/api/update/work/:id", controller.UpdateWork);

};