exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("users_content")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("users_content").insert([
				{ user_id: 1, content_id: 1 },
				{ user_id: 1, content_id: 2 },
				{ user_id: 1, content_id: 3 },
				{ user_id: 2, content_id: 4 },
				{ user_id: 2, content_id: 5 },
				{ user_id: 2, content_id: 6 },
				{ user_id: 3, content_id: 7 },
				{ user_id: 3, content_id: 8 },
				{ user_id: 3, content_id: 9 },
				{ user_id: 4, content_id: 10 },
				{ user_id: 4, content_id: 11 },
				{ user_id: 4, content_id: 12 },
			]);
		});
};
