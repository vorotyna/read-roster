// Express Server
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8001;
const app = express();
const cors = require("cors");
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

// Routers
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const loginRouter = require("./routes/login");
const alertsRouter = require("./routes/alerts");
const twilioRouter = require("./routes/twilio");


// Routes
app.use("/api/users", userRouter);
app.use("/api/books", booksRouter);
app.use("/api/login", loginRouter);
app.use("/api/alerts", alertsRouter);
app.use("/api/twilio", twilioRouter);


// Home Route
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼!");
});

// Listening Port for Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
