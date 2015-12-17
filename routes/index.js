var express = require('express');
var router = express.Router();



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
      successRedirect: '/#/dashboard',
      failureRedirect: '/'
    }
  ));

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


  // // GET /api/users
  // app.get('/home');


}


