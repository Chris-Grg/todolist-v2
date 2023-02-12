const express = require("express");
const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

const addTodo = asyncHandler(async (req, res) => {
  const body = req.body;
  const postTodo = new Todo({
    todo: body.todo,
  });
  await postTodo.save();
  res.send(postTodo);
});

const editTodo = asyncHandler(async (req, res) => {
  const todoId = req.params.id;
  try {
    Todo.findByIdAndUpdate(
      todoId,
      { $set: { todo: req.body.todo } },
      { new: true },
      (err, doc) => {
        if (!err) return res.send(doc);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Todo doesn't exist!" });
  }
});

const compTodo = asyncHandler(async (req, res) => {
  try {
    Todo.findByIdAndUpdate(
      req.params.id,
      { $set: { comp: req.body.comp } },
      { new: true },
      (err, doc) => {
        if (!err) return res.send(doc);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
  compTodo,
};
