const authService = require('./service');
const response = require('../components/response.js');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const _= require('underscore');

module.exports = function(req, res) {   

    let username = req.body.email;
    let password = req.body.password;
    let result = {}; 

    authService.CheckUserCredentials(username).then(function(user) { 
        // if user not exists  
        if (_.isEmpty(user)) { // if user not exists
            return response(res, null, 'No user is registered with the given credentials.', 401);
        } else { 
            if (passwordHash.verify(password, user.password)) { 
                var profile = {};
                profile.uid = user._id;
                var token = jwt.sign(profile, 'POSTAPP');
                let resUser = {};
                resUser.token = token;
                resUser.profile = profile;
                return response(res, resUser, "logged in", 200); 
            } else { // user entered wrong password
                return response(res, null, 'Incorrect username & password.', 401);
            }
        }
    }).catch(function(err) { 
        return response(null, null, 'Incorrect username & password.', 401);
    });
};