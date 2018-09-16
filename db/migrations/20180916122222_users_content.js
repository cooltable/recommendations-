exports.up = function(knex, Promise) {
	return knex.schema.createTable("users_content", table => {
		table.increments();

		table
			.integer("user_id")
			.unsigned()
			.references("users.id");

		table
			.integer("content_id")
			.unsigned()
			.references("content.id");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("users_content");
};
