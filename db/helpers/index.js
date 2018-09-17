const db = require("knex")(require("../../knexfile").development);

module.exports = {
	getUsers() {
		return db("users").select("username");
	},

	addUser(user) {
		return db("users").insert(user);
	},

	getUser(id) {
		return db("users")
			.select("username")
			.where("id", id)
			.first();
	},

	updatePassword(id, password) {
		return db("users")
			.where("id", id)
			.update({
				username: undefined,
				password: password,
			});
	},

	// getContent(id, recipients) {
	//     const content_querry = db("content");

	//     const recipient_querry = db()

	//     const
	// },

	addContent(content) {
		return db("content").insert(content);
	},
};
