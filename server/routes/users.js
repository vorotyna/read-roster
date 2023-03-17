const express = require('express');
const router = express.Router();
const db = require('../db/queries/users');

// Routes for api/users

router.get('/', (req, res) => {
  db.getAllUsers()
    .then(data => {
      res.status(204).send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});


router.post('/new', (req, res) => {
  db.addUser()
    .then(() => {
      res.status(204).send(data);
    })
    .catch(error => {
      res.status(500).send(error);

    });
});

router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(data => {
      res.status(204).send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
