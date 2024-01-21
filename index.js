const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
	res.json({ msg: "Hit  get todos" });
});

app.post("/todos", (req, res) => {
	const createData = req.body;
	const parseData = createTodo.safeParse(createData);
	if (!parseData.success) {
		res.status(411).json({ msg: "Invalid data" });
	}
	res.status(400).json({ msg: "Success" });
});

app.post("/completed", (req, res) => {
	const updateData = req.body;
	const parseData = updateTodo.safeParse(updateData);
	if (!parseData.success) {
		res.status(411).json({ msg: "Invalid data" });
	}
	res.status(400).json({ msg: "Success" });
});

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
