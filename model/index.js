var fs = require("fs");
var path = require("path");
var mongoose = require('mongoose'); 
mongoose.Promise = require('q').Promise;
var connect=mongoose.connect('mongodb://localhost/postDB');
var basename = path.basename(module.filename);
var db = {};
//READING ALL THE FILES IN THE MODEL FOLDER
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    db[file.replace(/\.[^/.]+$/, "")] = require(path.join(__dirname, file));
  });

  mongoose.connection.on('connected', function(){
    console.log('connected')
  });
  mongoose.connection.on('error', function(){
    console.log('error', error)
  });
db.Mongoose = mongoose;
db.Connect=connect;

module.exports = db;