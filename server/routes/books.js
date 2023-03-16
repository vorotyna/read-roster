const express = require('express');
const router = express.Router();
const db = require('../db/queries/books');

// Routes for api/books

router
  .route('/')
  .get((req, res) => {
    db.getAllBooks()
      .then(data => {
        console.log(data);
        res.send(data);
        res.status(204);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal server error');
      });
  });