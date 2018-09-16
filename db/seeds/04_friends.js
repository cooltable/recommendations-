exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("friends")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("friends").insert([
				{ alpha_id: 1, omega_id: 2 },
				{ alpha_id: 1, omega_id: 3 },
				{ alpha_id: 2, omega_id: 1 },
				{ alpha_id: 2, omega_id: 4 },
				{ alpha_id: 3, omega_id: 1 },
				{ alpha_id: 3, omega_id: 4 },
				{ alpha_id: 4, omega_id: 3 },
				{ alpha_id: 4, omega_id: 2 },
			]);
		});
};
