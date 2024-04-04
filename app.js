const express = require('express')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const authRoute = require('./routes').auth;


mongoose
  .connect("mongodb://127.0.0.1:27017/Project_ManagerDB")
  .then(() => {
    console.log("Successfully connected to Project Manager Database...");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);

app.listen(8080,() => {
    console.log('port 8080 is running...');
});