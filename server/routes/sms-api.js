const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const alerts = require('../db/queries/alerts');
const { sendNewSMSToUser } = require('../server-twilio');

// This route will send a SMS to the user and will update the alerts table with the message SID the corresponds to the text

router
  .route('/:id')
  .post((req, res) => {
    const id = parseInt(req.params.id);

    users.getUserById(id)
      .then(data => {
        let message = `Hello, ${data.first_name}! This is a reminder that ${req.body.book.title} is due on ${req.body.book.due_date.split("T")[0]} at ${req.body.book.location}.`;
        let phone = data.phone_number;
        let alertTime = new Date(req.body.book.alert_time);
        let time = alertTime.toISOString();

        sendNewSMSToUser(message, phone, time)
          .then(SMS_sid => {
            console.log('SID THE SLOTH', SMS_sid, req.body.book.title);
            alerts.updateSMS_sid(SMS_sid, req.body.book.title);
            res.status(200).send(SMS_sid);
          })
          .catch(error => {
            console.error("Could not retieve message SID", error);
            res.status(500).send(error);
          });
      })

      .catch(error => {
        console.error("Could not send SMS", error);
        res.status(500).send(error);
      });
  });

module.exports = router;