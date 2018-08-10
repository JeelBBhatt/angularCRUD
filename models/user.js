var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  name: {
    type: String
  },
  password: {
    type: String
  }
},{
  collection: 'User'
});

module.exports = mongoose.model('User', User);
