
/* @function : post (database)
 *  @created  : 21032019
 *  @modified :
 *  @Creator  : Tausif S
 *  @purpose  : create the model to keep record of posts from users
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
   from: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref:'Users'}, // refers _id in user schema
   title:{type:String},
   description: {type: String},
   created: {type: Date, default: Date.now()}
});

// create the model for post from users
module.exports = mongoose.model('Posts', postSchema);
