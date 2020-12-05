const connection = require('./connection')

module.exports = {
  getUserBooksList,
  getBooktById,
  addBooksToBookList
}
// gets the books of the user
function getUserBooksList (userId, db = connection) {
  return db('book_list').where('user_id', userId).select('id', 'user_id as userId', 'book_api_id as bookApiId', 'image_url as imageUrl')
}

function getBooktById (id, db = connection) {
  return db('book_list').where('id', id).select().first()
}

function addBooksToBookList (newBook, db = connection) {
  return db('book_list')
    .insert({
      user_id: newBook.userId,
      book_api_id: newBook.bookApiId,
      image_url: newBook.imageUrl

    })
}

// function addBookToBookList (newBook, db = connect) {
//   return db('book_list')
//     .insert({
//       user_id: newBook.userId,
//       book_api_id: newBook.bookApiId,
//       image_url: newBook.imageUrl
//     })
// }
