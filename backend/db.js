const mongoose = require("mongoose");
// mnongodb url handy
// mongodb+srv://Amrit:oOJ67NAG9YR7fqe4@cluster0.5xftjfv.mongodb.net/todos

mongoose.connect("mongodb+srv://Amrit:oOJ67NAG9YR7fqe4@cluster0.5xftjfv.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}