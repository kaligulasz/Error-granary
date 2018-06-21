const mongoose = require('mongoose');

const UserList = mongoose.model('User');

exports.userList = async (req, res) => {
  try {
    const userList = await UserList.find();
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};
