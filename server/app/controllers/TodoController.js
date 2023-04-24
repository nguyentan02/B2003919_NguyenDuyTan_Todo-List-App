// const TodoService = require("../services/TodoService");

const TodoModel = require("../models/TodoModel");


module.exports.getTodo = async (req, res) => {
    const Todo = await TodoModel.find();
    res.send(Todo);
}

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    TodoModel
        .create({ text })
        .then((data) => {
            console.log("addce seccessfully");
            console.log(data);
            res.send(data);
        })
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body

    TodoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err))
}
module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body

    TodoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err))
}
