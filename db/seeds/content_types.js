exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content_types')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('content_types').insert([
        { id: 1, type: 'movie' },
        { id: 2, type: 'book' },
        { id: 3, type: 'album' },
        { id: 4, type: 'television' },
      ]);
    });
};
