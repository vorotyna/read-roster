const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const alerts = require('../db/queries/alerts');
const { sendEmailToUser } = require('../server-mailgun');

// This route will send an email to the user

router
  .route('/:id')
  .post((req, res) => {
    const id = parseInt(req.params.id);
    let message_id;

    users.getUserById(id)
      .then(data => {
        let book = req.body.title;
        let message =
          `Hello ${data.first_name},\n\nThis is a reminder that ${req.body.title} is due on ${req.body.due_date.split("T")[0]} at ${req.body.location}.\n\nKind regards,\nreadroster`;
        let email = data.email;
        const alertTime = new Date(req.body.alert_time);
        const time = alertTime.toUTCString();

        sendEmailToUser(book, message, email, time, function(error, messageId) {
          if (error) {
            console.error('Error sending email:', error);
          } else {
            message_id = messageId;
            alerts.updateEmail_id(message_id, req.body.title);
          }
        });

        res.sendStatus(200);
      })
      .catch(error => {
        console.error("Could not send email", error);
        res.status(500).send(error);
      });
  });

module.exports = router;