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
};
