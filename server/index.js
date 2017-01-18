var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var port = 3000;

var app = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/pvclonedb');
mongoose.connection.on('connected', function() {
  console.log("jgjjkjkfgjkdfg");
})
// var db = mongoose('birds');
// var sightings = db.collection('sightings');

var watchController = require('./controllers/watchController.js');
var strapController = require('./controllers/strapController.js');

app.post('/watches', watchController.addWatch);

app.get('/watches', watchController.getWatches);

app.post('/straps', strapController.addStrap);

app.get('/straps', strapController.getStraps);
// watchController.watchProfile.create({
//   "name":"Feliz Mesh",
//   "price": 149.00,
//   "image": "url",
//   "inStock": true,
//   "description": "The Feliz Mesh is a timeless yet distinctive accessory, with an aesthetic quality that is equally elegant and sophisticated. Named for Los Feliz - perhaps Los Angeles' most unique neighborhood - the watch features matt black plated stainless steel, as well as an ultra-thin, lightweight stainless steel mesh strap. The minimalist ultra-thin watch case makes it comfortable to wear on the go and it's perfect for either a day at the park or a night at a party. Like Los Feliz, this watch has an independent vibe that is all its own.",
//   "specs": {
//     "case": "39 MM",
//     "material":"STEEL",
//     "caseColor":"MATT BLACK",
//     "caseThickness":"7 MM",
//     "waterResistant":"5 ATM",
//     "movement":"QUARTZ",
//     "dialColor":"MATT BLACK",
//     "strap":"STAINLESS STEEL",
//     "strapWidth":"20 MM",
//     "interchangeableStraps":"YES"
//   },
//   "gallery":[],
//   "reviews":[],
//   "straps":[],
//   "popularity":1
// });

// var watchProfile =  new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String,
//   inStock: Boolean,
//   description: String,
//   specs: {
//     case: String,
//     material: String,
//     caseColor: String,
//     caseThickness: String,
//     waterResistant: String,
//     movement: String,
//     dialColor: String,
//     strap: String,
//     strapWidth: String,
//     interchangeableStraps: String
//   },
//   gallery: Array,
//   reviews: Array,
//   similar: Array,
//   straps: Array,
//   popularity: Number
// });







app.listen(port, function() {
  console.log("Started server on port", port);
});
