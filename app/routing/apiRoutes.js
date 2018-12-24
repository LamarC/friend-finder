const friendsList = require("../data/friends");

//Routing
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    //Server is resonding to the req from the survey to parse it
    app.post("/api/friends", function (req, res) {

        const bestOpt = {
            name: "",
            photo: ""
        }

        const userData = req.body
        const differences = [];

        //Conditional to compare info with other users
        if (otherUser.lenght > 1) {

            otherUser.forEach(function (user) {
                const totalDifferences = 0;

                for (let i = 0; otherUser.answer.lenght; i++) {
                    let otherUser = user.answer[i];
                    let thisUser = thisUser.answer[i];
                    let differences = (otherUser - thisUser);
                    totalDifferences = Math.floor(differences);
                }

                differences.push(totalDifferences);
            });

            res.json(bestOpt);

        }
    })
}