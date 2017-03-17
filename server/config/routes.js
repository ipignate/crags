var auth     = require('./auth'),
    users    = require('../controllers/users'),
    crags    = require('../controllers/crags'),
    mongoose = require('mongoose');

module.exports = function(app) {
  // Routes for Users
  app
     .get('/api/users',auth.requiresRole('admin'), users.getUsers)
     .post('/api/users',users.createUser)
     .put('/api/users',users.updateUser)
     .delete('/api/users',auth.requiresRole('admin'),users.deleteUser);
  
  //Routes for Crags
  app
     .get('/api/crags',crags.getCrags)
     .post('/api/crags',crags.createCrag)
     .post('/api/crags/query',crags.queryCrags)

  app
     .put('/api/crags/:id',crags.updateCrag)
     .get('/api/crags/:id',crags.getCrag)
     .delete('/api/crags/:id',crags.deleteCrag);

  //Routes for Partials
  app
    .get('/partials/*', function(req, res) {
      res.render('../../public/app/' + req.params[0]);
  });

  //Routes for login
  app
    .post('/login', auth.authenticate);

  //Routes for logout
  app
    .post('/logout', function(req, res) {
      req.logout();
      res.end();
    });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}