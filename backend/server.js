const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("<h1> Home Page!</h1>");
});

// The provided port by the hosting platform or default to 5000
const port = process.env.PORT || 5000;

// connect database
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
