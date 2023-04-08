const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const { sendEmailToUser } = require('../server-mailgun');

// This route will send an email to the user

router
  .route('/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);

    users.getUserById(id)
      .then(data => {
        let book = req.query.book.title;
        let message =
          `Hello ${data.first_name},\n\nThis is a reminder that ${book} is due on ${req.query.book.due_date.split("T")[0]} at ${req.query.book.location}.\n\nKind regards,\nreadroster`;
        let email = data.email;
        const alertTime = new Date(req.query.book.alert_time);
        const time = alertTime.toUTCString();

        console.log(time);

        sendEmailToUser(book, message, email, time);
      })
      .catch(error => {
        console.error("Could not send email", error);
        res.status(500).send(error);
      });
  });

module.exports = router;