// Express Server
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8001;
const app = express();
const cors = require("cors");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

// Routers
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");

// Routes
app.use("/api/users", userRouter);
app.use("/api/books", booksRouter);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼!");
});

// Listening Port for Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
