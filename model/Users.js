
/* @function : Users (database)
 *  @created  : 03212019
 *  @modified :
 *  @Creator  : Tausif S
 *  @purpose  : create the model to keep record of users
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
   email: {type: String, required: true, trim: true}, 
   password: {type: String,required: true, trim: true},
   created: {type: Date, default: Date.now()},
   modified: {type: Date, default: Date.now()},
   is_deleted: {type: Boolean, default: false}
});

// create the model for user
module.exports = mongoose.model('Users', userSchema);
