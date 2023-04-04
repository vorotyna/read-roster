const express = require('express');
const router = express.Router();

// This route will send to customer

router
  .route('/')
  .post((req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(error => {
        console.log(error);
        res.send(JSON.stringify({ success: false }));
      });
  });

module.exports = router;