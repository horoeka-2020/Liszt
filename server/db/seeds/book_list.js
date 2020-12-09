exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('book_list')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('book_list').insert([
        {
          id: 1,
          user_id: 1,
          book_api_id: '1bMXAAAAYAAJ',
          title: 'The Adventures of Oliver Twist',
          image_url:
            'http://books.google.com/books/content?id=1bMXAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          author: 'Charles Dickens',
          description:
            "At the heart of Charles Dickens's second novel, first published in 1838, is a story as much about crime and poverty as it is about justice and charity. Orphaned at birth, Oliver Twist grows up under the loveless, relentless watch of a workhouse. He runs away with hopes for a better life in London, only to become--at the hands of the unforgettable Artful Dodger--a guileless pawn in a gang of pickpockets and robbers working for Fagin, one of Dickens's most controversial villains. Full of ingenious plot twists, at turns thrilling, tragic, tender, and sharp-eyed, The Adventures of Oliver Twist is among Dickens's most enduring classics. This is a free digital copy of a book that has been carefully scanned by Google as part of a project to make the world's books discoverable online. To make this print edition available as an ebook, we have extracted the text using Optical Character Recognition (OCR) technology and submitted it to a review process to ensure its accuracy and legibility across different screen sizes and devices. Google is proud to partner with libraries to make this book available to readers everywhere."
        },
        {
          id: 2,
          user_id: 2,
          book_api_id: 'i_AIO-T8TY4C',
          title: 'Lady Gaga',
          image_url:
            'http://books.google.com/books/content?id=i_AIO-T8TY4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          author: 'Paula Johanson',
          description:
            'Chronicles the life of the pop music sensation, documenting her early school and pre-fame years, as well as the milestones of her career and the eccentricities of her public image.'
        }
      ])
    })
}
