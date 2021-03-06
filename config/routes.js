express = require('express');

module.exports = function (app) {

  var router = express.Router();

  // User routes
  var recordclimate = require('../app/controllers/recordclimate');
  router.post('/users', recordclimate.recordReading);
  router.get('/users', recordclimate.returnReadings);

  

  app.use('/', router);

}