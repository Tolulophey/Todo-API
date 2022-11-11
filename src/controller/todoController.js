const Todo = require("../model/todo")

//create todo
exports.createTodo = async (req, res)=>{
    try {
        const todo = await req.body;
        const created = await Todo.create(todo)
        if(!created){
             return res.status(400).json({
                success: false,
                message: "Todo creation failed"
            })
        }
        return res.status(201).json({
            success: true,
            message: "new todo created",
            todo: created
                })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            message: error.message
        })
    }
}


//get all todos
exports.getAllTodos = async (req, res)=>{
    try {
        const todos = await Todo.find({})
        if(!todos.length === 0){
             return res.status(404).json({
                success: false,
                message: "no Todo was found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Todos found",
            todos: todos,
            total: todos.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            message: error.message
        })
    }
}


//get single todo
exports.getTodo = async (req, res)=>{
    try {
        const todo = await Todo.findById(req.params.id)
        if(!todo){
             return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Todo found",
            todo
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            message: error.message
        })
    }
}

//edit todo
exports.updateTodo = async (req, res)=>{
    try {
        let update = await req.body
        const newTodo = await Todo.findByIdAndUpdate(req.params.id, {
            title: update.title, 
            description: update.description
        })
        if(!newTodo){
             return res.status(404).json({
                success: false,
                message: "Todo not updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            todo: newTodo
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            message: error.message
        })
    }
}

//delete todo
exports.deleteTodo = async (req, res)=>{
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
             return res.status(400).json({
                success: false,
                message: "Todo not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            message: error.message
        })
    }
}