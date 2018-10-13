exports.up = function(knex, Promise) {
  return knex.schema.createTable('content_types', table => {
    table.increments();

    table
      .string('type', 128)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('content_types');
};
