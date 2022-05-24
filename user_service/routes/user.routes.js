var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller')

var jwtService = require("../services/jwt.service");

router.post('/login', UserController.login)
router.post('/createUser', UserController.createUser)
router.get('/getMe', jwtService.authenticateToken, UserController.getMe)

module.exports = router;