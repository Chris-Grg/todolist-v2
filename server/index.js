const express = require("express"); //import express
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/router");
const { ConnectDB } = require("./helper/db");
const userRouter = require("./routes/userRouter");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
ConnectDB();
app.use("/api", router);
app.use("/api/user", userRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Starting at port ${port}`));
