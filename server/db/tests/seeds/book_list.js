exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('book_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('book_list').insert([
        {
          id: 1,
          user_id: 1,
          book_api_id: '1bMXAAAAYAAJ',
          image_url: 'http://books.google.com/books/content?id=1bMXAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        {
          id: 2,
          user_id: 2,
          book_api_id: 'i_AIO-T8TY4C',
          image_url: 'http://books.google.com/books/content?id=i_AIO-T8TY4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }

      ])
    })
}
