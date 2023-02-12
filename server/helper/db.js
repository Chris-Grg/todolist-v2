const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URL;

try {
  var ConnectDB = () => {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return console.log("Connected to mongodb at url " + url);
  };
} catch (error) {
  console.log(error);
}

module.exports = {
  ConnectDB,
};
