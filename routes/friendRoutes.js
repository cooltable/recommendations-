const express = require("express");
const router = express.Router();
const helpers = require("../db/helpers/index");

router.get("/friends", (req, res) => {
	console.log(req.query.id);
	helpers
		.getUserFriends(req.query.id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

router.post("/friends", (req, res) => {
	let { friend_id } = req.body;
	helpers
		.addFriend(req.query.id, friend_id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

router.delete("/friends", (req, res) => {
	let { friend_id } = req.body;
	helpers
		.removeFriend(req.query.id, friend_id)
		.then(response => res.json(response))
		.catch(err => console.log(err));
});

module.exports = router;
