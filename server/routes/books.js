const express = require('express');
const router = express.Router();
const books = require('../db/queries/books');
const alerts = require('../db/queries/alerts');


// Routes for api/books

router
  .route('/')
  .get((req, res) => {
    books.getAllBooks()
      .then(data => {
        console.log(data);
        res.send(data);
        res.status(204).send('All books retrieved');
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal server error');
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
            res.status(200).send('Book and alerts added');
          })
          .catch(error => {
            res.status(500).send('An error occurred while adding the book and alert', error);
          });
      })
      .catch(error => {
        res.status(500).send('An error occurred while adding the book', error);
      });
  });