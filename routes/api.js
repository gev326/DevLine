var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var clientsCtrl = require('../controllers/clients');

router.get('/clients', clientsCtrl.all);



module.exports = router;
