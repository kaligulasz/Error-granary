const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  admin: Boolean
});

UserSchema.pre('save', function (next) {
  // TO DO: CHECK IF PLAYER EXIST
  next();
});

module.exports = mongoose.model('User', UserSchema);