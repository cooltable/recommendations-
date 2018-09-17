exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("users_content")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("users_content").insert([
				{ to_id: 2, content_id: 1 },
				{ to_id: 3, content_id: 2 },
				{ to_id: 4, content_id: 3 },
				{ to_id: 1, content_id: 4 },
				{ to_id: 3, content_id: 5 },
				{ to_id: 4, content_id: 6 },
				{ to_id: 1, content_id: 7 },
				{ to_id: 2, content_id: 8 },
				{ to_id: 4, content_id: 9 },
				{ to_id: 1, content_id: 10 },
				{ to_id: 2, content_id: 11 },
				{ to_id: 3, content_id: 12 },
			]);
		});
};
