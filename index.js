const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", async (req, res) => {
	const todos = await todo.find();
	res.status(200).json(todos);
});

app.post("/todos", async (req, res) => {
	const createData = req.body;
	const parseData = createTodo.safeParse(createData);
	if (!parseData.success) {
		res.status(411).json({ msg: "Invalid data" });
		return;
	}
	await todo.create({
		title: createData.title,
		discription: createData.discription,
		completed: false,
	});
	res.status(202).json({ msg: "Success" });
});

app.post("/completed", async (req, res) => {
	const updateData = req.body;
	const parseData = updateTodo.safeParse(updateData);
	if (!parseData.success) {
		res.status(411).json({ msg: "Invalid data" });
	}
	await todo.updateOne({ _id: updateData.id }, { completed: true });
	res.status(400).json({ msg: "Success" });
});
app.delete("/todos", async (req, res) => {
	const deletedData = req.body;
	const parserData = updateTodo.safeParse(deletedData);
	if (!parserData.success) {
		res.status(404).json({
			msg: "does not exist",
		});
		return;
	}
	await todo.findOneAndDelete({ _id: deletedData.id });
	res.status(200).json({
		msg: "successsfully deleted",
	});
});

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
