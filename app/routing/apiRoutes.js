const path = require("path");

module.export = function(app){
    app.get("/api/users", function(req, res){
        res.render("user")
    })
}