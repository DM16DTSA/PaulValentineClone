var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
// var config = require('./config');

var uri = "mongodb://heroku_ngd5klnv:i2em7ssc6sh4gqb0vqbob0mg22@ds139949.mlab.com:39949/heroku_ngd5klnv"
mongodb://user:pass@host:port/db
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: process.env.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(uri);
mongoose.connection.on('connected', function() {
  console.log('connected to database')
})

var watchController = require('./controllers/watchController.js');
var strapController = require('./controllers/strapController.js');



app.get('/watches', watchController.getWatches);
app.get('/straps', strapController.getStraps);

app.post('/morestraps', strapController.getStrapsbyId);
app.get('/similarW/:coll', watchController.getCollWatches);
app.get('/similarS', strapController.similarStraps)
/////////////////////
//////reviews////////
/////////////////////
app.put('/watches', function(req, res) {
  watchController.addWatchReview(req, res)
});
app.put('/straps', strapController.addStrapReview);
/////////////////////
//////reviews////////
/////////////////////

// app.post('/watches', watchController.addWatch);
// app.post('/straps', strapController.addStrap);


//////////////////////
///////cart///////////
//////////////////////
const cartCtrl = require('./controllers/cartCtrl.js');
app.get('/api/cart', cartCtrl.getCart);
app.post('/api/cart', cartCtrl.postCart);
app.put('/api/cart/:id/:action', cartCtrl.putCart);
app.delete('/api/cart/:id', cartCtrl.deleteCart);
app.delete('/api/destroy', cartCtrl.destroyCart);
//////////////////////
///////cart///////////
//////////////////////


//////////////////////
///nodemailer/////////
//////////////////////
const mailCtrl = require('./controllers/mailCtrl.js');
app.post('/sendmail', mailCtrl.mail);
//////////////////////
///nodemailer/////////
//////////////////////

module.exports = app;
app.listen(port, function() {
  console.log("Started server on port", port);
});
