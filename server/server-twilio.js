const accountSid = process.env.TWILIO_ACCOUNT_SID; // Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;  // Auth Token from www.twilio.com/console
const twilioPhone = process.env.TWILIO_PHONE_NUMBER; //Twilio Phone Number - Where the texts will be sent from
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

// Function takes in a string as a message and sends it via SMS from the Twilio API
const sendSMSToUser = function(message, number, time) {
  client.messages
    .create({
      body: message,
      from: twilioPhone,
      to: number,
      sendAt: time,
      messagingServiceSid: messagingServiceSid,
      scheduleType: "fixed",
    })
    .then(message => console.log(message.sid));
};

module.exports = { sendSMSToUser };