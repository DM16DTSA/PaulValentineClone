var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var config = require('./config');

var mongoose = require('mongoose');

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
var cartCtrl = require('./controllers/cartCtrl.js');

app.get('api/cart', cartCtrl.getCart);
app.post('api/cart', cartCtrl.postCart);
app.put('api/cart/:id/:quantity', cartCtrl.putCart);
app.delete('api/cart/:id', cartCtrl.deleteCart);
app.delete('api/destroy', cartCtrl.destroyCart);
//////////////////////
///nodemailer/////////
//////////////////////
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const mailCtrl = require('./controllers/mailCtrl.js');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  // secure: true,
  auth: {
    user: config.emailAddress,
    pass: config.emailPas
  }
});
app.post('/sendmail', (req,res,next)=>{
  // console.log()
  let text = req.body.name+'\n\n'+'phone: '+req.body.phone+'\n\n'+req.body.message;
  let mailOptions = {
    from: config.emailAddress, // sender address
    to: config.emailAddress, // list of receivers
    subject: 'From:'+req.body.email, // Subject line
    text: text//, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('Message sent: ' + info.response);
          res.send({yo: info.response});
      };
  });
});
//////////////////////
///nodemailer/////////
//////////////////////


app.listen(config.port, function() {
  console.log("Started server on port", config.port);
});
