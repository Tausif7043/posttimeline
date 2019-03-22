'use strict';
var model = require('../model');
var User = model.Users;
var Posts = model.Posts;
module.exports = {
	/**
	*@CheckUserCredentials
    * its a function fetch user's data by its username
    * @param | username | String | it should be username
	**/
	CheckUserCredentials : function(username){ 
	   return User.findOne({email: username, is_deleted: false}).exec();
	},
	getUserByEmail: function(email) {
        // fetching user by its email
        return User.find({ "email": email }).sort({ 'created': -1 }).exec();
	},
	createUser: function(params) {
        // creating new user 
        return User.create(params, function (err, res) {
			if (err) return console.log(err);
			// saved!
		  });
	},
	createPost: function(params) {
        // creating new user 
        return Posts.create(params, function (err, res) {
			if (err) return console.log(err);
			// saved!
		  });
	},
	getUsersPost: function(email) {
        // fetching user by its email
        return Posts.find().sort({ 'created': -1 }).exec();
	},
};
