const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mail');

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.post('/api/sendMail', (req, res) => {
  console.log(req.body);
  sendEmail('matthew.gitto1@gmail.com', req.body.email, req.body.message);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Running at 5000 ');
});
