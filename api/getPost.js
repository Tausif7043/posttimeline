const service = require('./service');
const response = require('../components/response.js');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const _= require('underscore');

module.exports = function(req, res) {   

    let username = req.body.email;
    let password = req.body.password;
    let result = {}; 

    service.getUsersPost().then(function(post) { 
        // if user not exists  
        if (_.isEmpty(post)) { // if user not exists
            return response(res, null, 'No post is available.', 401);
        } else { 
            return response(res, post, "logged in", 200); 
            
        }
    }).catch(function(err) { 
        return response(null, null, 'Invalid request.', 401);
    });
};