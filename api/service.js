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
        	return User.create(params);
	},
	createPost: function(params) { 
        // creating new post 
		return Posts.create(params);
	},
	getUsersPost: function(email) {
        // fetching user's post
        	return Posts.find().populate("from",'email').sort({ 'created': -1 }).exec();
	},
};
