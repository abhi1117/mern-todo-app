const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 }); // ✅ Sort by newest first
  res.json(todos);
});


// Create a todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// Update a todo
router.put("/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, completed: req.body.completed },
    { new: true } // ✅ Return updated object
  );
  res.json(updatedTodo);
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted", deletedAt: new Date() });
});


module.exports = router;
