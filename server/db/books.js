const { connect } = require('superagent')
const connection = require('./connection')

module.exports = {
    getUserBooksList,
    getUserBookById,
    addBooksToBookList
}
// gets the books of the user
function getUserBooksList (userId, db = connection){
    return db('book_list').where('user_id', userId).select('id', 'user_id as userId', 'book_api_id as bookApiId', 'image_url as imageUrl')
}
// gets one book of the user
function getUserBookById (userId, id, db = connection) {
    return db('book_list').where('id', id, 'user_id', userId).select().first()
}

// soon
function addBooksToBookList (newBook, db = connect) {
    return db('book_list')
    .insert({
        user_id: newBook.user_id,
        book_api_id: newBook.book_api_id,
        image_url: newBook.image_url
    })
}
