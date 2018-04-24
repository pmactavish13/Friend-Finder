# Friend-Finder
Friend Finder - Node and Express Servers   

A compatibility-based "FriendFinder" application -- using Express to handle routing, npm path, npm body-parser and deployed to Heroku so other users can fill out a survey. 

This full-stack site takes in results from 10 question (based on a 1 to 5 scale) users' surveys, then compares the users answers with those from other users. The app will then display the name and picture of the user with the best overall match.

htmlRoutes.js file includes two routes:
    A GET Route to /survey which should display the survey page.
    A default, catch-all route that leads to home.html which displays the home page. 

apiRoutes.js file contains two routes:
    A GET route with the url /api/friends used to display a JSON of all possible friends.
    A POST routes /api/friends used to handle incoming survey results. This route is also be used to handle the compatibility logic. 
    
Each user's results are stored in a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). The difference between current user's scores is compared against those from other users, question by question. The differences are then added up to calculate the totalDifference.  Lowest difference = best match.




