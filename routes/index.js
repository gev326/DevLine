var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');


module.exports = function(app, passport) {
  // The root route renders our only view
  app.get('/', function(req, res) {
    res.render('index', { user: req.user });
  });

  app.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  app.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  ));

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


  // // GET /api/users
  // router.get('/users', userCtrl.all);


}

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
