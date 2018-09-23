const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const helpers = require("../db/helpers/index");

const secret = "secret";

//Middleware function to check for token
function protected(req, res, next) {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				return res.json({
					error: true,
					message: "You are not authorized",
				});
			} else {
				req.user = { username: decodedToken.username };
				next();
			}
		});
	} else {
		return res
			.json({
				error: true,
				message: "No token provided",
			})
			.catch(err => res.status(500).send(err));
	}
}

//Gets a list of user names
router.get("/", protected, function(req, res) {
	res.send("ya made it mon");
});

router.get("/users", protected, function(req, res) {
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

//Gets a single username
router.get("/users/:id", protected, function(req, res) {
	helpers
		.getUser(req.params.id)
		.then(user => {
			return res.json({
				error: false,
				message: user,
			});
		})
		.catch(err => res.status(500).send(err));
});

//Changes password for the provided username
router.put("/users/:id", protected, function(req, res) {
	const { password } = req.body;
	if (!password) {
		return res.json({
			error: true,
			message: "Please provide your new password",
		});
	} else {
		helpers
			.updatePassword(req.params.id, password)
			.then(update => {
				return res.json({
					error: false,
					message: update,
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

module.exports = router;
