const express = require("express");
const router = express.Router();
const helpers = require("../db/helpers/index");

//Adds a Recommendation and attaches all neccessary references to the
//users_content table.
router.post("/", function(req, res) {
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

module.exports = router;
