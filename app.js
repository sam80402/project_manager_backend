const express = require('express')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


mongoose
  .connect("mongodb://127.0.0.1:27017/to_do_listDB")
  .then(() => {
    console.log("Successfully connected to To Do List Database...");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(8080,() => {
    console.log('port 8080 is running...');
});