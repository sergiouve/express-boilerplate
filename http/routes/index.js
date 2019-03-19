const express = require('express');
const params = require('./params');
const jwtAuthUser = require('../middlewares/jwtAuthUser');
const UsersController = require('../controllers/UsersController');

const userAuth = jwtAuthUser();

const router = express.Router();

// Configure custom parameters of this router
params.configure(router);

router.post('/authenticate', UsersController.authenticate);
router.get('/users', userAuth, UsersController.list);

module.exports = router;
