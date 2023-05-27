const accountSid = process.env.TWILIO_ACCOUNT_SID; // Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;  // Auth Token from www.twilio.com/console
const twilioPhone = process.env.TWILIO_PHONE_NUMBER; //Twilio Phone Number - Where the texts will be sent from
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;


const client = require('twilio')(accountSid, authToken);

// Function takes in a string as a message and sends it via SMS from the Twilio API
const sendNewSMSToUser = function(message, number, time) {
  return new Promise((resolve, reject) => {

    client.messages
      .create({
        body: message,
        from: twilioPhone,
        to: number,
        sendAt: time,
        messagingServiceSid: messagingServiceSid,
        scheduleType: "fixed",
      })

      .then(message => {
        resolve(message.sid);
      })
      .catch(error => {
        reject(error);
      });

  });
};

// Function takes in an existing SMS sid from the alerts table in DB and stops the scheduled send from the Twilio API
// MODIFY
const unsendSMS = function(SMS_sid) {
  return new Promise((resolve, reject) => {

    client.messages
      .create({
        body: message,
        from: twilioPhone,
        to: number,
        sendAt: time,
        messagingServiceSid: messagingServiceSid,
        scheduleType: "fixed",
      })

      .then(message => {
        resolve(message.sid);
      })
      .catch(error => {
        reject(error);
      });

  });
};

module.exports = { sendNewSMSToUser, unsendSMS };
