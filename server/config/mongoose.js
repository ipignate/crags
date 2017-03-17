var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    cragModel = require('../models/Crag');

module.exports = function(config) {
  mongoose.Promise = global.Promise; // to avoid node:3341 Deprecation warning
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('crags db opened');
  });

  userModel.createDefaultUsers();
  cragModel.createDefaultCrags();

};

