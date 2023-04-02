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
          res.status(200).send({
            token: data[0].id,
            success: true
          });
        } else {
          res.status(401).send({ message: "Invalid email/username or password" });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).send({ message: "Error retrieving user from database" });
      });
  });

router
  .route("/new")
  .post((req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.phone) {
      res.status(400).send({ message: "Need name, email, phone or password" });
    }
    db.addUser(req.body.name, req.body.email, req.body.password, req.body.phone)
      .then(data => {
        res.status(200).send({
          token: data.id,
          success: true
        });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send({ message: "Error adding new user to database" });
      });
  });

module.exports = router;

// Check error in db; change seed character limit for phone