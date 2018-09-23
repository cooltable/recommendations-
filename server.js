const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const authRoutes = require("./routes/authRoutes");
const restrictedRoutes = require("./routes/restrictedRoutes");

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/auth", authRoutes);
server.use("/restricted", restrictedRoutes);

server.post("/api/content", function(req, res) {
	const { title, description, type, rating, from_id, to_idARR } = req.body;
	if (!title || !description || !type || !rating || !from_id || !to_idARR) {
		return res.json({
			error: true,
			message: "Please provide information for all fields",
		});
	} else {
		helpers
			.addContent(req.body)
			.then(content => {
				return res.json({
					error: false,
					message: content,
				});
			})
			.catch(err =>
				res.json({
					error: true,
					message: err,
				}),
			);
	}
});

server.post("/api/content/:id/to", (req, res) => {
	const { to_id } = req.body;
	helpers
		.addRecipients(to_id, req.params.id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

server.delete("/api/content/:id/to", (req, res) => {
	const { to_id } = req.body;
	helpers
		.removeRecipients(to_id, req.params.id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

server.get("/api/content/:id", (req, res) => {
	helpers
		.getContent(req.params.id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

server.get("/api/friends", (req, res) => {
	helpers
		.getUserFriends(req.query.id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

server.post("/api/friends", (req, res) => {
	let { friend_id } = req.body;
	helpers
		.addFriend(req.query.id, friend_id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

server.delete("/api/friends", (req, res) => {
	let { friend_id } = req.body;
	helpers
		.removeFriend(req.query.id, friend_id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

const port = 8000;
server.listen(port, function() {
	console.log(`\n === Web API Listening on http://localhost:${port}===`);
});
