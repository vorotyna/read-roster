const mailgun = require("mailgun-js");

const apiKey = process.env.API_KEY_ID; // .env variables
const domainName = process.env.DOMAIN_NAME; // .env variables
const mg = mailgun({ apiKey: apiKey, domain: domainName }); // parameters from mailgun

// Function takes in email details and sends it via email from the Mailgun API
const sendEmailToUser = function(book, message, email, time, callback) {
  const data = {
    from: `readroster <mailgun@${domainName}>`,
    to: email, // Due to my mailgun account being a trial, it can only send to registered emails
    subject: `‼️ ${book} due date`,
    text: message,
    'o:deliverytime': time
  };

  mg.messages().send(data, function(error, body) {
    if (error) {
      console.error('Error sending email:', error);
      callback(error, null);
    } else {
      console.log('Email sent:', body);
      callback(null, body.id);
    }
  });
};

// Function takes in an existing email id from the alerts table in DB and cancels the scheduled send from the Mailgun API
const unsendEmail = function(message_id) {
  console.log("It is not possible to currently unschedule an email delivery with the Mailgun API");
};

module.exports = { sendEmailToUser, unsendEmail };
