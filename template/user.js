function usertemplate({name }) {
  var str = `<p>Hi ${name},</p>
              <p>
                Thank you for contacting us!
              </p>
              <p>
                Our Team will get back to you as soon as possible.
              </p>
              <p>Thanks and Regards</p>
              <p>Lalit Plastic Pvt. Ltd.</p>`;

  return str;
}
module.exports = usertemplate;
