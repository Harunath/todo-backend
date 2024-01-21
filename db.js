const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(
		`mongodb+srv://harunath04:${process.env.DB_PASS}@cluster0.h3djrbd.mongodb.net/`
	)
	.then(() => {
		console.log("Mongo connected");
	})
	.catch((e) => {
		console.log(e);
	});

const todoSchema = mongoose.Schema({
	title: String,
	discription: String,
	completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
	todo,
};
