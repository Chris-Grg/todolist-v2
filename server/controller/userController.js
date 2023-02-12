const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const createUser = asyncHandler(async (req, res) => {
  const data = req.body;
  const user = new User({
    name: data.name,
    email: data.email,
    password: data.password,
  });
  await user.save();
  res.send({
    code: 200,
    message: user,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const logindata = req.body;

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.json({
        isAuth: false,
        message: " Auth failed ,email not found",
      });
    else {
      if (user.password !== req.body.password) {
        return res.json({
          isAuth: false,
          message: " Auth failed ,password not found",
        });
      } else {
        return res.json({ isAuth: true, message: "Successfully logged in" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  createUser,
  loginUser,
};
