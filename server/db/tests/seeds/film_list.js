exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('film_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('film_list').insert([
        {
          id: 1,
          user_id: 1,
          title: 'Guardians of the Galaxy Vol. 2',
          year: '2017',
          plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
          running_time: '136 min',
          image_url: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
        },
        {
          id: 2,
          user_id: 2,
          title: 'Ratatouille',
          year: '2007',
          plot: 'Ratatatata ',
          running_time: '111 min',
          image_url: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg'
        }

      ])
    })
}
