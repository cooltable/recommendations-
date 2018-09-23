const jwt = require("jsonwebtoken");
const secret = "secret";

module.exports = {
	protected: function(req, res, next) {
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
	},
};
