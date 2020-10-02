const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Resource = require('./api/models/resourcesModel'),
  bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ResourcesDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/resourcesRoutes');
routes(app);

app.listen(port);

console.log('This app is now listening on port ' + port)
