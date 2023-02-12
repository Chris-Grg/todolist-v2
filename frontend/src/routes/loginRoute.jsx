const express = require("express");
const {checkUser } = require("../controller/loginController");
const loginRouter = express.Router();
loginRouter.post("/", checkUser );

module.exports = loginRouter;
