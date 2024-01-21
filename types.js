const zod = require("zod");

const createTodo = zod.object({
	title: zod.string().min(1),
	discription: zod.string().min(1),
});

const updateTodo = zod.object({
	id: zod.string().min(1),
});

module.exports = {
	createTodo,
	updateTodo,
};
