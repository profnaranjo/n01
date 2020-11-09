var nodemailer = require('nodemailer');

// For demo only - DO NOT USE your real credentials!
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'someone@gmail.com',
    pass: 'user_password'
  }
});

var mailOptions = {
  from: 'someone@gmail.com',
  to: 'someone@gmail.com,anotherfirend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Added comment for first commit
