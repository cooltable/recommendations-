const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const helpers = require("./db/helpers");

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/api/users", function(req, res) {
	helpers
		.getUsers()
		.then(users => {
			return res.json({
				error: false,
				message: users,
			});
		})
		.catch(err => res.status(500).send(err));
});

server.post("/api/users", function(req, res) {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.json({
			error: true,
			message: "Please provide a username and/or password",
		});
	} else {
		helpers
			.addUser({ username, password })
			.then(user => {
				return res.json({
					error: false,
					message: user,
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

const port = 8000;
server.listen(port, function() {
	console.log(`\n === Web API Listening on http://localhost:${port}===`);
});
