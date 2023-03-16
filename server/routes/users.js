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
        res.status(204).send('All users retrieved');
      })
      .catch(error => {
        res.status(500).send('An error occurred while retrieving all the users', error);
      });
  })
  .post((req, res) => {
    db.addUser()
      .then(() => {
        res.status(204).send('New user added');
      })
      .catch(error => {
        res.status(500).send('An error occurred while adding a new user', error);

      });
  });

router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(data => {
      res.send(data);
      res.status(204).send('User retrieved by id');
    })
    .catch(error => {
      res.status(500).send('An error occurred while retrieving a user by id', error);
    });
});
