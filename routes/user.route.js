const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router()


router.route('/singup')
    .post(userController.signup)


module.exports = router