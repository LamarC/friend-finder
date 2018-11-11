const friendsList = require("../data/friends.js");

module.export = function(app){
    app.get("/api/friends", function(req, res){
        res.render("friendsList");
    });


    app.post("/api/friends", function(req,res){
        
    });

    
}