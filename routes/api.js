var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var clientsCtrl = require('../controllers/clients');
var projectsCtrl = require('../controllers/projects');

router.get('/clients', clientsCtrl.all);

router.get('/users', userCtrl.all);

router.get('/projects', projectsCtrl.all)

module.exports = router;
