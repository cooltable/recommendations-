const express = require("express");
const router = express.Router();
const helpers = require("../db/helpers/index");

//Checking Server

//Gets a list of user names
router.get("/", function(req, res) {
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
router.get("/:id", function(req, res) {
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
router.put("/:id", function(req, res) {
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
