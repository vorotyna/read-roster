const express = require('express');
const router = express.Router();
const { sendSMSToUser } = require('../server-twilio');

// This route will send a SMS to the user

router
  .route('/')
  .post((req, res) => {
    console.log(req.body.data);
    sendSMSToUser(req.body.data);
  });

module.exports = router;