var friendData 		= require('../data/friends.js');
var path 			= require('path');

// API GET Requests - when users "visit" a page. 
// (ex:localhost:PORT/api/admin...they are shown a JSON of the data in the table) 

var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array


	// app.post('/api/friends', function(req, res){

	// 	var newUser = req.body;
 //        var diffs = [];
 //        if (friendsData.length < 1) {
 //            console.log("unable to do calculation; not enough users");
 //        } else {
 //            compareFriends(friendsData, newUser, diffs);
 //            var lowest = diffs[0];
 //            for (var i = 0; i < diffs.length; i++) {
 //                if (diffs[i] < lowest) {
 //                    lowest = diffs[i];
 //                }
 //            };
 //            var bestMatch = diffs.indexOf(lowest);
 //            res.send(friendsData[bestMatch]);
 //        };
 //        friendsData.push(newUser);
	// });

// 	function compareFriends(friends, newUser, diffs) {
// 	    var curUserIndex = 0;
// 	    while (curUserIndex < friends.length) {
// 	        var totalDifference = 0;
// 	        for (var i = 0; i < newUser.scores.length; i++) {
// 	            totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(newUser.scores[i]));
// 	        }
// 	        diffs.push(totalDifference);
// 	        curUserIndex++;
// 	    }
	}
