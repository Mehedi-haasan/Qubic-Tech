const controller = require("../controllers/progress.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/get/progres", controller.getProgress);
    app.post("/api/create/progres", controller.createProgress);
    app.put("/api/update/progres/:id", controller.UpdateProgress);
    app.delete("/api/delete/progres/:id", controller.UpdateProgress);

};