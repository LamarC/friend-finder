const friends = require("../data/friends");

//Routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Server is resonding to the req from the survey to parse it
    app.post("/api/friends", function (req, res) {

        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000,
        }

        //Takes results from the survey and parse it
        const userData = req.body;
        const userScores = userData.userScores;

        //
        const totalDifference = [];

        // Here we loop through all the friend arr in the database.
        for (let i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // We then loop through all the scores of each friend
            for (let j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {

                    //Reset bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //Save users data to DB
        friends.push(userData);

        // Return a JSON with bestMatch
        res.json(bestMatch);

    });

};