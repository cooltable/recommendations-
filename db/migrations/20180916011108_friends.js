exports.up = function(knex, Promise) {
	return knex.schema.createTable("friends", friends => {
		friends.increments();

		friends
			.integer("alpha_id")
			.unsigned()
			.references("users.id");

		friends
			.integer("omega_id")
			.unsigned()
			.references("users.id");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("friends");
};
