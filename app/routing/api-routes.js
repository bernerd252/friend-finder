var friendData 		= require('../data/friends.js');
var path 			= require('path');

// API GET Requests - when users "visit" a page. 
// (ex:localhost:PORT/api/admin...they are shown a JSON of the data in the table) 

var totalDifference = 0;
var match
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendData);

	});
console.log(friendData)
//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array


	app.post('/api/friends', function(req, res){
	var newUser = req.body;
	var sum = 0;
	var possibleMatchScore = 100;
	var possibleMatch = [];
	
	for( var i = 0; i < newUser.scores.length; i++ ){
	    sum += parseInt( newUser.scores[i], 10 ); //don't forget to add the base
	}
	// var newUserScore = sum += parseInt(newUser.scores, 10 );
	// 
	var newUserScore = sum;
    

    for (var i = 0; i<friendData.length; i++){
       var friendScores = friendData[i].scores
       // 
       summ = 0
       for( var x = 0; x < newUser.scores.length; x++ ){
       summ += parseInt( friendScores[x], 10 );}
       // for (var j = 0; j<friendScores.length; j++){
       // 		sum += parseInt( friendScores[i], 10 ); 
       // console.log(summ);
       var totalDifference = Math.abs(sum - summ)
       parseInt(totalDifference);
       // Math.abs(totalDifference);
       console.log(totalDifference)     
       
       if (totalDifference<possibleMatchScore){
       	possibleMatchScore = totalDifference;
       	possibleMatch = friendData[i];
       	console.log(possibleMatch)
       }

   	}
   	 friendData.push(newUser);

   	 res.json(possibleMatch);
 });
}