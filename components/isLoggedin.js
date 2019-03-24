'use strict';
var response = require('./response'); 
module.exports = 
{
    isLoggedIn: function(req, res, next){
         
          return response(res, null, "unauthorised request", 401); 
      },
}
