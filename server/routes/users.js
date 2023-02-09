const express = require('express');
const router = express.Router();
const db = require('../db/queries/users');

// Routes for api/users

router
  .route('/')
  .get((req, res) => {
    db.getAllUsers()
      .then(data => {
        res.send(data);
        res.status(204);
      })
      .catch(error => {
        console.error(error);
      });
  })
  .post((req, res) => {
    db.addUser()
      .then(() => {
        res.status(204);
      })
      .catch(error => {
        console.error(error);
      });
  });



router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.error(error);
    });
});
