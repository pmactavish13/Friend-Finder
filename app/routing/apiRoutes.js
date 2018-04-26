var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 50
        };

        // parse user input
        var userInput = req.body;
        var userName = userInput.name;
        var userPhoto = userInput.photo;
        var userScores = userInput.scores;

        var scoreDifference = 0;

        // loop through all the friends database. 
        for (var i = 0; i < friends.length; i++) {

            // loop through scores of each friend to calculate score difference
            for (var h = 0; h < friends[i].scores[h]; h++) {
                scoreDifference += Math.abs(parseInt(userScores[h]) - parseInt(friends[i].scores[h]));

                // sets "best match" at first loop then updates each subsequent loop
                if (scoreDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoreDifference;
                }
            }
        }
        friends.push(userInput);
        res.json(bestMatch);
    });
}