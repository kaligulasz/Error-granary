const mongoose = require('mongoose');

const Issue = mongoose.model('Issue');

exports.issueList = async (req, res) => {
  const issueList = await Issue.find();
  res.jsonp(issueList);
};

exports.addIssue = async (req, res) => {
  const taskList = new Issue({
    name: req.body.name,
    timestamp: Date.now(),
    message: req.body.message,
  });

  await taskList.save();
  res.send('Successful saved issue');
};
