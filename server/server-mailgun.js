const mailgun = require("mailgun-js");

const apiKey = process.env.API_KEY_ID; // .env variables
const domainName = process.env.DOMAIN_NAME; // .env variables
const mg = mailgun({ apiKey: apiKey, domain: domainName }); // parameters from mailgun

// Function takes in email details and sends it via email from the Mailgun API
const sendEmailToUser = function(book, message, email, time) {
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
    } else {
      console.log('Email sent:', body);
    }
  });
};

module.exports = { sendEmailToUser };