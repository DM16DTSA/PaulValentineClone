var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var port = 4261;

mongoose.connect('mongodb://localhost/pvclonedb');
mongoose.connection.on('connected', function() {
  console.log("jgjjkjkfgjkdfg");
})
// var db = mongoose('birds');
// var sightings = db.collection('sightings');



var app = express();
app.use(bodyParser.json());





app.listen(port, function() {
  console.log("Started server on port", port);
});
