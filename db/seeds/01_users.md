exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Trevor',
          password: 'password',
          first_name: 'Trevor',
          last_name: 'ButtFace',
          email: 'butt@buttface.com',
        },
        {
          username: 'Ash',
          password: 'password',
          first_name: 'Ashwin',
          last_name: 'Sundararajan',
          email: 'ash@gmail.com',
        },
        {
          username: 'Liz',
          password: 'password',
          first_name: 'Liz',
          last_name: 'Baker',
          email: 'liz@gmail.com',
        },
        {
          username: 'Lauren',
          password: 'nerd',
          first_name: 'Lauren',
          last_name: 'Worthington',
          email: 'lauren@gmail.com',
        },
      ]);
    });
};
