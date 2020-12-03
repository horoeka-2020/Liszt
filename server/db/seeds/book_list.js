exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('book_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('book_list').insert([
        {
          id: 1,
          user_id: 1,
          title: 'The Naruto Saga',
          author: 'Kazuhisa Fujie',
          published_date: '2006',
          description: 'Using a question-and-answer format, presents information about the manga and anime series featuring the young Ninja in training who must learn to control the powerful Fox Spirit who resides in his body.',
          image_url: 'http://books.google.com/books/content?id=sD9cAeO95fwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        {
          id: 2,
          user_id: 2,
          title: 'Harry Potter and International Relations',
          author: 'Daniel H. Nexon',
          published_date: '2006',
          description: 'Drawing on a range of historical and sociological sources, this work shows how aspects of Harrys world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.',
          image_url: 'http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }

      ])
    })
}
