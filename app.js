const express = require('express')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const authRoute = require('./routes').auth;
const customerRoute = require('./routes').customer;
const caseRoute = require('./routes').case;
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Invalid or missing API Key' });
  }
  next();
};


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


// 將中間件應用到所有路由
app.use(checkApiKey);



app.use("/api/auth", authRoute);
app.use("/api/customer", customerRoute);
app.use("/api/case", caseRoute);



app.listen(8080,() => {
    console.log('port 8080 is running...');
});