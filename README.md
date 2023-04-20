# readroster

Created by [Alisa Vorotyntseva](https://github.com/vorotyna)

Readroster is an online library book tracker built using PostgreSQL, Express.js, React & JavaScript, Tailwind CSS, Node.JS, Twilio API, and Mailgun API. The web application allows users to add/track their checked-out library books and customize alerts to remind them of any approaching due dates.

### Registration Page

!["Registration"](https://github.com/vorotyna/read-roster/blob/main/docs/register.png?raw=true)

### Login Page

!["Login"](https://github.com/vorotyna/read-roster/blob/main/docs/login.png?raw=true)

### Add A Book / Set Alerts

https://user-images.githubusercontent.com/114186235/230831231-8621175b-82f6-488c-a2bd-05cf2f368dff.mov

### Edit Alerts / Delete Book

https://user-images.githubusercontent.com/114186235/230833902-71c88677-3b2f-4eae-8e81-a9b4764108aa.mov

### iCal Event

!["iCal"](https://github.com/vorotyna/read-roster/blob/main/docs/ical.png?raw=true)

### SMS Alert

!["SMS API"](https://github.com/vorotyna/read-roster/blob/main/docs/twilio.png?raw=true)

### Email Alert

!["Email API"](https://github.com/vorotyna/read-roster/blob/main/docs/email.png?raw=true)

## How It's Made:

**Tech used:** PostgreSQL, Express.js, React, Node.js, JavaScript, Tailwind CSS, Twilio API, Mailgun API, Cloudinary API

## Setup:

- On your terminal, clone the repo via `git@github.com:vorotyna/read-roster.git`
- On your preferred code editor, open the root project folder and navigate to the `server` folder
  - Duplicate the `.env.example` file located in `read-roster/server`, then remove `.example` from the filename
    - In this newly-created `.env` file, provide the variables with relevant values (will have to register for Twilio and Mailgun)
    - Save your changes
- On your terminal, enter `psql`
  - Then follow instructions found in `read-roster/server/db/instructions.md`
- On your terminal, navigate to `read-roster/server`
  - Then `npm i`
  - Then `npm start`
- On a **separate** terminal, navigate to `read-roster/client`
  - Then `npm i`
  - Then `npm start`
- Keep the 2 terminals up and running
- On your browser, navigate to `http://localhost:3000` and start exploring the app! <br />
