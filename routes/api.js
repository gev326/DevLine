var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var clientsCtrl = require('../controllers/clients')

router.post('/clients', clientsCtrl.clientCreate);
router.get('/clients', clientsCtrl.allClients);


router.get('/users', userCtrl.userIndex);
router.get('/user/:id', userCtrl.userShow);

router.get('/me', function(req, res) {
  res.json(req.user);
});

router.post('/clients/:client_id/projects', clientsCtrl.createProject)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
