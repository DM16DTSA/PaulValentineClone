// const app = require('../index');
// const config = require('../config');
//
// module.exports = {
//   getTrans: (req,res,next)=>{
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       secure: true,
//       auth: {
//         user: config.emailAddress,
//         pass: config.emailPas
//       },
//
//     });
//     let text = req.body.name+'\n\n'+'phone: '+req.body.phone+'\n\n'+req.body.message;
//     let mailOptions = {
//     from: config.emailAddress+'>', // sender address
//     to: config.emailAddress, // list of receivers
//     subject: 'From:'+req.body.email, // Subject line
//     text: text//, // plaintext body
//     // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error);
//             res.send({yo: 'error'});
//         }else{
//             console.log('Message sent: ' + info.response);
//             res.send({yo: info.response});
//         };
//     });
//   },
// };
