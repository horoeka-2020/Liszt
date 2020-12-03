exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('book_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('book_list').insert([
        {
          id: 1,
          user_id: 1,
          title: 'Naruto',
          author: 'Masashi Kishimoto',
          published_date: '1997',
          description: 'Japanese Manga',
          image_url: ''
        }

      ])
    })
}
