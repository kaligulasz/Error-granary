const express = require('express');
const userListController = require('../controllers/userController');
const authController = require('../controllers/authController');
const issueController = require('../controllers/issueController');

const router = express.Router();


router.get('/users', userListController.userList);
router.get('/issues', issueController.issueList);
router.post('/new-issue', issueController.addIssue);
router.post('/authenticate', authController.authUser);


module.exports = router;

