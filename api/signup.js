'use strict';
const model = require('../model');
const User = model.User; // require user model
const response = require('../components/response'); // require response js for setting headers variables
const validator = require('validator'); // require for put server side validations
const userService = require('./service');
const passwordHash = require('password-hash');
const moment= require('moment');

module.exports = function(req, res) { 
    //validation for User Email
    if (!validator.isEmail(req.body.email)) {
        return response(res, null, "invalid email", 422);
    }

    let jsonData = req.body;
    jsonData.is_deleted = false;
    jsonData.password = passwordHash.generate(jsonData.password);
    jsonData.created = moment.utc().format();
    jsonData.modified = moment.utc().format(); 
    userService.getUserByEmail(jsonData.email).then(function(data) { 
        if (data.length > 0) {
                let result = {};
                result.data = data[0];
                result.type = req.body.type;
                return response(res, result, "Email is already registered.Please login to continue.", 406);
        } else { 
            userService.createUser(jsonData).then(function(data) { 
                if (!data) {
                    return response(res, null, "Failed", 500);
                }
                let result = {};
                result.data = data;
                return response(res, result, "user created successfully", 200);
            }); 
        }
    }).catch(function(err) {
        return response(res, null, err.message, 500);
    });
};
