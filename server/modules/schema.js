var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({"name": String, "message": String});

module.exports = postSchema;