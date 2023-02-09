const express = require('express');
const router = express.Router();
const db = require('../db/queries/users');

// Routes for api/users

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((data) => {
      res.send(data);
    });
});