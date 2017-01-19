var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var config = require('./config');

var mongoose = require('mongoose');

var port = 3000;

var app = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/pvclonedb');
mongoose.connection.on('connected', function() {
  console.log("jgjjkjkfgjkdfg");
})

var watchController = require('./controllers/watchController.js');
var strapController = require('./controllers/strapController.js');



app.get('/watches', watchController.getWatches);
app.get('/straps', strapController.getStraps);

// app.post('/watches', watchController.addWatch);
// app.post('/straps', strapController.addStrap);


app.listen(config.port, function() {
  console.log("Started server on port", port);
});
