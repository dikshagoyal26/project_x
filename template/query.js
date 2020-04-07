function queryTemplate({ email, phone, message, name,organization}) {
  var str = `<div><p>Hi,</p>
                <p>userid : ${email}</p>
                <p>contact number : ${phone}</p>
                <p>Full Name : ${name}</p>
                <p>Organisation : ${organization}</p>
                <p>Query : ${message}</p>
              </div>`;
  return str;
}
module.exports = queryTemplate;
