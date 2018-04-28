# Friend-Finder
Friend Finder - Node and Express Servers deployed on Heroku: https://secure-fortress-56113.herokuapp.com/ 

A compatibility-based "FriendFinder" application -- using npm Express, npm path, npm body-parser and deployed to Heroku so other users can fill out a survey.

This full-stack site takes in results from a 10 question (based on a 1 to 5 scale) users' survey, then compares the answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The app consists of:

server.js

htmlRoutes.js file including two routes:
    A GET Route to /survey which should display the survey page.
    A default, catch-all route that leads to home.html which displays the home page. 

apiRoutes.js file contains two routes:
    A GET route with the url /api/friends used to display a JSON of all possible friends.
    A POST routes /api/friends used to handle incoming survey results. This route is also used to handle the compatibility logic.

data folder with a file of stored users information

public folder with home and survey html pages.  The survey.html takes input and sends it to the apiRoutes.js then records the response.   
    
Each user's results are stored in a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). The difference between current user's scores is compared against those from other users, question by question. The differences are then added up to calculate the totalDifference.  Lowest difference = best match.




