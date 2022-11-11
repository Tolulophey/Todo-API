const router = require("express").Router()
const controller = require("../controller/todoController")


router
.post("/todos", controller.createTodo)
.get("/todos", controller.getAllTodos)
.get("/todos/:id", controller.getTodo)
.put("/todos/:id", controller.updateTodo)
.delete("/todos/:id", controller.deleteTodo)

module.exports = router