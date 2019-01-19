const friends = require("../data/friends");

//Routing
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //Server is resonding to the req from the survey to parse it
  app.post("/api/friends", function(req, res) {
    let bestMatch = {
      name: "",
      photo: "",
      totalDifference: 1000
    };

    //Takes results from the survey and parse it
    const userInput = req.body;
    const userScores = userData.scrs;

    //Empty arr will compare difference btwn userInput and info in the DB
    let totalDifference;

    // Here we loop through all the friends arr in the DB.
    for (let i = 0; i < friends.length; i++) {
      let theFriend = friends[i];
      console.log(friends[i].name);
      totalDifference = 0;

      // We loop through scores of friends
      for (let j = 0; j < theFriend[i].scrs[j]; j++) {
        let theFriend = theFriend.scrs[j];
        totalDifference += Math.abs(
          parseInt(userScores[j]) - parseInt(theFriend[i].scrs[j])
        );

        if (totalDifference <= bestMatch.friendDifference) {
          //Reset bestMatch to be the new friend.
          bestMatch.name = theFriend[i].name;
          bestMatch.photo = theFriend[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    //Save users data to DB
    friends.push(userInput);

    // Return a JSON with bestMatch
    res.json(bestMatch);
  });
};
