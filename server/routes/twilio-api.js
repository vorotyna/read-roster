const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const { sendSMSToUser } = require('../server-twilio');

// This route will send a SMS to the user

router
  .route('/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);

    users.getUserById(id)
      .then(data => {
        let message = `Hello, ${data.first_name}! This is a reminder that ${req.query.book.title} is due on ${req.query.book.due_date} at ${req.query.book.location}.`;
        let phone = data.phone_number;
        let alertTime = new Date(req.query.book.alert_time);
        let time = alertTime.toISOString();

        console.log("SMS MESSAGE", message, phone, time);

        sendSMSToUser(message, phone, time);
      })
      .catch(error => {
        console.error("Could not send SMS", error);
        res.status(500).send(error);
      });
  });

module.exports = router;