var nodemailer = require("nodemailer");
var mailKeys = require("../config/mail");
// const usertemplate = require("../template/user");
const queryTemplate = require("../template/query");
function sendMail({ 	name,email,phone,organization,message}) {
  console.log({	name,email,phone,organization,message})
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailKeys.user,
      pass: mailKeys.pass
    }
  });

  const userMailOptions = {
    from: mailKeys.user, // sender address
    to: email, // list of receivers
    subject: "Lalit Plastic Pvt. Ltd.", // Subject line
    html: require("../template/user")({name })
  };
  const queryMailOptions = {
    from: mailKeys.user, // sender address
    to: mailKeys.user, // list of receivers
    subject: "A new Query", // Subject line
    html: queryTemplate({ email, phone, message, name,organization  })
  };
  transporter.sendMail(userMailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(queryMailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}
module.exports = sendMail;
