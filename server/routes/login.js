const express = require('express');
const router = express.Router();
const db = require('../db/queries/users');

// Routes for api/login

router
  .route("/")
  .post((req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).send({ message: "Need email or password" });
    }
    db.getUserByLoginDetails(req.body.email, req.body.password)
      .then(data => {
        if (data.length > 0) {
          res.send({
            token: data[0].id,
            success: true
          });
        } else {
          res.status(401).send({ message: "Invalid email/username or password" });
        }
      })
      .catch(error => {
        res.status(500).send({ message: "Error retrieving user from database" });
      });
  });

module.exports = router;