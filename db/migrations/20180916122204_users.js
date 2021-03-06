exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users.string('first_name', 128).notNullable();
    users.string('last_name', 128).notNullable();
    users
      .string('email')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
