const express = require("express");
const { createUser, loginUser } = require("../controller/userController");
const userRouter = express.Router();
userRouter.post("/", createUser).post("/login", loginUser);

module.exports = userRouter;
