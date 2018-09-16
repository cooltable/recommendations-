exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("users").insert([
				{ username: "Trevor", password: "password" },
				{ username: "Ash", password: "password" },
				{ username: "Liz", password: "password" },
				{ username: "Lauren", password: "nerd" },
			]);
		});
};
