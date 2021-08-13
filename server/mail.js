const mailer = require('nodemailer');
const { Hello } = require('./hello_template.js');
const { Thanks } = require('./thanks_template.js');

const getEmailData = (to, from, message) => {
  let data = null;

  data = {
    from,
    to,
    subject: `New Message in your portfolio`,
    text: from + ' says ' + message,
  };
  console.log(data);

  return data;
};

const sendEmail = (to, from, message) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mittoportfolio@gmail.com',
      pass: '!2345Abc',
    },
  });

  const mail = getEmailData(to, from, message);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(' email sent successfully');
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
