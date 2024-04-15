const express = require('express')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const authRoute = require('./routes').auth;
const customerRoute = require('./routes').customer;
const caseRoute = require('./routes').case;

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
app.use("/api/customer", customerRoute);
app.use("/api/case", caseRoute);

app.listen(8080,() => {
    console.log('port 8080 is running...');
});