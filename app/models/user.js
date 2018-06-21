const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserListSchema = new mongoose.Schema({
  name: String,
  password: String,
  admin: Boolean,
});

UserListSchema.pre('save', function (next) {
  // TO DO: CHECK IF PLAYER EXIST
  next();
});

module.exports = mongoose.model('User', UserListSchema);
