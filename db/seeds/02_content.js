exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('content').insert([
        {
          title: 'Brazil',
          description: 'Best movie of all time',
          image:
            'https://m.media-amazon.com/images/M/MV5BMDM0YTM3Y2UtNzY5MC00OTc4LThhZTYtMmM0ZGZjMmU1ZjdmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
          type: 'movie',
          rating: 5,
          from_id: 1,
        },
        {
          title: 'The Idiot',
          description: 'Best book of all time',
          type: 'book',
          rating: 5,
          from_id: 1,
        },
        {
          title: 'Blood on the Tracks',
          description: 'Best album of all time',
          type: 'album',
          rating: 5,
          from_id: 1,
        },
        {
          title: 'Inception',
          description: 'Best movie of all time',
          image:
            'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
          type: 'movie',
          rating: 5,
          from_id: 2,
        },
        {
          title: 'Da Vinci Code',
          description: 'Best book of all time',
          type: 'book',
          rating: 5,
          from_id: 2,
        },
        {
          title: 'Ghost Story',
          description: 'Best album of all time',
          type: 'album',
          rating: 5,
          from_id: 2,
        },
        {
          title: 'Twilight',
          description: 'Best movie of all time',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg',
          type: 'movie',
          rating: 5,
          from_id: 3,
        },
        {
          title: 'Orlando',
          description: 'Best book of all time',
          type: 'book',
          rating: 5,
          from_id: 3,
        },
        {
          title: 'Doolittle',
          description: 'Best album of all time',
          type: 'album',
          rating: 5,
          from_id: 3,
        },
        {
          title: 'Frozen',
          description: 'Best movie of all time',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
          type: 'movie',
          rating: 5,
          from_id: 4,
        },
        {
          title: 'Some philsophy stuff Trevor thinks is a waste of time',
          description: 'Best book of all time',
          type: 'book',
          rating: 5,
          from_id: 4,
        },
        {
          title: 'Postman Postman Postman',
          description: 'Best album of all time',
          type: 'album',
          rating: 5,
          from_id: 4,
        },
      ]);
    });
};
