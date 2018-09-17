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
			return res.json(users);
		})
		.catch(err => res.status(500).send(err));
});

const port = 8000;
server.listen(port, function() {
	console.log(`\n === Web API Listening on http://localhost:${port}===`);
});
