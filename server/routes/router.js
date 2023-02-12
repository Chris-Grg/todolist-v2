const express = require("express");
const {
  addTodo,
  getTodo,
  editTodo,
  deleteTodo,
  compTodo,
} = require("../controller/todoController");

const router = express.Router();

router
  .get("/", getTodo)
  .post("/", addTodo)
  .put("/edit/:id", editTodo)
  .delete("/delete/:id", deleteTodo)
  .put("/comp/:id", compTodo);
module.exports = router;
