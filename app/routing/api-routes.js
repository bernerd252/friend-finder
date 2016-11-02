var friendsData = require('../data/friendsData.js');

module.exports = function(app){

	app.get('/api/friends', function(req, res) {
    res.json(friendsData);
});
}