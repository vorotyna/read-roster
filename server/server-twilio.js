const accountSid = process.env.TWILIO_ACCOUNT_SID; // Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;  // Auth Token from www.twilio.com/console
const twilioPhone = process.env.TWILIO_PHONE_NUMBER; //Twilio Phone Number - Where the texts will be sent from

const client = require('twilio')(accountSid, authToken);

// Function takes in a string as a message and sends it via SMS from the Twilio API
const sendSMSToUser = function(message) {
  client.messages
    .create({
      body: message,
      from: twilioPhone,
      to: '+16506648860'
    })
    .then(message => console.log(message.sid));
};

module.exports = { sendSMSToUser };
