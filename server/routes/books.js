const express = require('express');
const router = express.Router();
const books = require('../db/queries/books');
const alerts = require('../db/queries/alerts');


// Routes for api/books

router
  .route('/')
  .get((req, res) => {
    books.getAllBooksAndAlerts()
      .then(data => {
        console.log(data);
        res.status(204).send(data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });

router
  .route('/new')
  .post((req, res) => {
    const user_id = req.body.user_id;
    const title = req.body.title;
    const author = req.body.author;
    const location = req.body.location;
    const due_date = req.body.due_date;
    const SMS = req.body.SMS;
    const email = req.body.email;
    const calendar = req.body.calendar;
    const photo = req.body.photo;

    let book = {
      user_id,
      title,
      author,
      location,
      photo,
    };

    books.addBook(book)
      .then(data => {
        console.log(data);
        const book_id = data.id;

        let alert = {
          book_id,
          user_id,
          due_date,
          SMS,
          email,
          calendar
        };

        alerts.addAlerts(alert)
          .then((data) => {
            res.status(200).send(data);
          })
          .catch(error => {
            console.error("Could not add alert", error);
            res.status(500).send(error);
          });
      })
      .catch(error => {
        console.error("Could not add book", error);
        res.status(500).send(error);
      });
  });

module.exports = router;