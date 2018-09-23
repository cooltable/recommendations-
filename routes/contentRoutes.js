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
				res.status(500).json({
					error: true,
					message: err,
				}),
			);
	}
});

router.put("/:id/recipients", (req, res) => {
	const { to_id } = req.body;
	helpers
		.checkRecipients(to_id, req.params.id)
		.then(filtered => {
			console.log(filtered);
			if (filtered.length === 0) {
				res.json({
					error: true,
					message:
						"All recipeints have already been recommended this content.",
				});
				return;
			}

			let recipients = filtered.map(id => ({
				to_id: id,
				content_id: Number(req.params.id),
			}));

			return helpers.addRecipients(recipients, req.params.id);
		})
		.then(contentId => {
			if (contentId) {
				res.json({
					error: false,
					message: "New recipients added",
					contentId: contentId,
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: true, message: "Server Error" });
		});
});

module.exports = router;
