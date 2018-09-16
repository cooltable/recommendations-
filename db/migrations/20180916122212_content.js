exports.up = function(knex, Promise) {
	return knex.schema.createTable("content", content => {
		content.increments();

		content
			.string("title", 128)
			.notNullable()
			.unique();

		content.string("description", 2000);

		content.string("type", 128).notNullable();

		content.integer("rating").unsigned();

		content
			.integer("from_id")
			.unsigned()
			.references("users.id");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("content");
};
