// Remaining question:
// For the add and delete book features, if those actions are successful, we want to take the user back to their newly updated list.
// Question is; who asks for that booklist? Booklist.jsx who renders it? Or should the list be returned back here after the delete?

import request from 'superagent'

export function getBookList (user) {
  // To be called by BookList.jsx so it can map books to render the Carousel.
  // Complete, pending tests

  const hardCodedUserId = 1
  return request.get(`/api/v1/books/${hardCodedUserId}`)
    .then((res) => {
      console.log(res)
      return res.body
    })
}

export default function postBookToList (newBook) {
  // To be called when user clicks Add button on BookDetail.jsx
  // Sending book_api_id and user_id to serverside to add to user's booklist
  console.log('nB', newBook)
  const hardCodedUserId = 1
  const { image, isbn } = newBook
  const bookDetails = {
    userId: hardCodedUserId,
    bookApiId: isbn,
    imageUrl: image
  }
  console.log('bookDetails', bookDetails)
  return request.post('/api/v1/books/')
    .send(bookDetails)
    .then((res) => {
      console.log(res)
      return res.body
    })
}

export function delBookFromList (userId, bookApiId) {
  // To be called when user clicks Remove button on BookDetail.jsx
  // Sending book_api_id and user_id to serverside to remove from user's booklist

  const bookDetails = {
    userId: userId,
    bookApiId: bookApiId
  }
  return request.del('/api/v1/books/')
    .send(bookDetails)
    .then((res) => {
      console.log(res)
      return res.body
    })
}
