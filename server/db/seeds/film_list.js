exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('film_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('film_list').insert([
        {
          id: 1,
          user_id: 1,
          film_api_id: 'tt3896198',
          title: 'Guardians of the Galaxy Vol. 2',
          year: '2017',
          image_url: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
        },
        {
          id: 2,
          user_id: 2,
          film_api_id: 'tt0382932',
          title: 'Ratatouille',
          year: '2007',
          image_url: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg'
        },
        {
          id: 3,
          user_id: 1,
          film_api_id: 'tt0382932',
          title: 'The Goonies',
          year: '2007',
          image_url: 'leshgo'
        }

      ])
    })
}
