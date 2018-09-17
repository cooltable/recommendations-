const db = require("knex")(require("../../knexfile").development);

module.exports = {
	getUsers() {
		return db("users").select("username");
	},
};
