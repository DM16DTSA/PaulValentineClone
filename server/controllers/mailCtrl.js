
module.exports = {
  mail: (req,res,next)=>{
    const app = require('../index')
    const process.env = require('../process.env');
    const nodemailer = require('nodemailer');
    const hbs = require('nodemailer-express-handlebars');
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.emailAddress,
        pass: process.env.emailPas
      }
    });
    //
    if(req.body.order){
      let text = 'name: '+req.body.name+'\n\n'+'phone: '+req.body.phone+'\n\n'+'order: '+req.body.order+'\n\n'+'message: '+req.body.message;
      let mailOptions = {
        from: process.env.emailAddress, // sender address
        to: process.env.emailAddress, // list of receivers
        subject: 'From:'+req.body.email+'  RETURN', // Subject line
        text: text//, // plaintext body
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
    }else{
      let text = 'name: '+req.body.name+'\n\n'+'phone: '+req.body.phone+'\n\n'+'message: '+req.body.message;
      let mailOptions = {
        from: process.env.emailAddress, // sender address
        to: process.env.emailAddress, // list of receivers
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
    }
  }
}
