const express = require('express');
const router = express.Router();
const alerts = require('../db/queries/alerts');


// Routes for api/books

router
  .route('/update_alert')
  .post((req, res) => {
    const book_id = req.body.book_id;
    const SMS = req.body.SMS;
    const email = req.body.email;
    const calendar = req.body.calendar;

    let alert = {
      book_id,
      SMS,
      email,
      calendar,
    };

    alerts.updateAlerts(alert)
      .then(data => {
        console.log(`Updated alert ${book_id}`, data);
        res.status(200).send(data);
      })
      .catch(error => {
        console.error(`Could not update alert for: ${book_id}`, error);
        res.status(500).send(error);
      });
  });

module.exports = router;