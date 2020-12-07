const connection = require('./connection')

module.exports = {
  getUserBooksList,
  getBooktById,
  addBooksToBookList,
  removeBooksFromBookList
}
// gets the books of the user
function getUserBooksList (userId, db = connection) {
  return db('book_list').where('user_id', userId).select('id', 'user_id as userId', 'title', 'book_api_id as bookApiId', 'image_url as imageUrl', 'author', 'description')
}

function getBooktById (id, db = connection) {
  return db('book_list').where('id', id).select().first()
}

function addBooksToBookList (newBook, db = connection) {
  return db('book_list')
    .insert({
      user_id: newBook.userId,
      book_api_id: newBook.bookApiId,
      title: newBook.title,
      image_url: newBook.imageUrl,
      author: newBook.author,
      description: newBook.author
    })
}

function removeBooksFromBookList (bookApiId, userId, db = connection) {
  return db('book_list')
    .delete()
    .where('book_api_id', bookApiId)
    .where('user_id', userId)
    // eslint-disable-next-line promise/always-return
    .then(count => {
      console.log('Number of records deleted:', count)
    })
}
