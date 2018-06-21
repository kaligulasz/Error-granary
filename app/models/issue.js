const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const IssueSchema = new mongoose.Schema({
  name: String,
  timestamp: String,
  message: String,
});

IssueSchema.pre('save', (next) => {
  // TO DO: CHECK IF PLAYER EXIST
  next();
});

module.exports = mongoose.model('Issue', IssueSchema);
