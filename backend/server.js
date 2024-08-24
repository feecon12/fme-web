const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const messageRouter = require("./routers/messageRouter");
const userRouter = require("./routers/userRouter");

app.use(express.json());
// Serve static files from the Vite build directory
const path = require("path");
app.use(express.static(path.join(__dirname, "../client/dist")));

// For any request that doesn't match an API route, serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});
const PORT = process.env.PORT || 3300;
const DB_URI = process.env.DB_URI;

// Middleware
app.use(bodyParser.json());
app.use(cors());

/** Database connection starts */
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connection to MongoDB is established!");
  })
  .catch((err) => {
    console.log("Something went wrong with DB connection", err);
  });

/** Routers */
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

// Fallback middleware for 404 errors
app.use(function (req, res) {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
