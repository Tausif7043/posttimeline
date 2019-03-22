'use strict';
const response = require('../components/response'); // require response js for setting headers variables
const validator = require('validator'); // require for put server side validations
const service = require('./service'); 
const moment= require('moment');

module.exports = function(req, res) { 
    //validation for User title
    if (!validator.isEmpty(req.body.title)) {
        return response(res, null, "invalid title", 404);
    }

    let jsonData = req.body;
    jsonData.is_deleted = false; 
    jsonData.title = req.body.title;
    jsonData.description = req.body.description; 
    jsonData.created = moment.format();
    jsonData.modified = moment.format(); 
    service.createPost(jsonData).then(function(data) {
        if (!data) {
            return response(res, null, "Failed", 500);
        }
        let result = {};
        result.data = data;
        return response(res, result, "Post created successfully", 200);
    }).catch(function(err) {
        return response(res, null, err.message, 500);
    });
};
