import request from 'superagent'

export const getBookList = (user) => {
  const hardCodedUserId = 1
  return request.get(`/api/v1/books/${hardCodedUserId}`).then((res) => {
    console.log(res)
    return res.body
  })
}

export const postBookToList = (newBook) => {
  // To be called when user clicks Add button on a search result

  console.log('nB', newBook)
  const hardCodedUserId = 1
  const { image, isbn, title, description, author } = newBook
  const bookDetails = {
    userId: hardCodedUserId,
    bookApiId: isbn,
    imageUrl: image,
    author: author,
    title: title,
    description: description
  }
  console.log('bookDetails', bookDetails)
  return request
    .post('/api/v1/books/')
    .send(bookDetails)
    .then((res) => {
      console.log(res)
      return res.body
    })
}

export const delBookFromList = (bookApiId) => {
  // To be called when user clicks Remove button on their list.

  console.log(bookApiId)
  const hardCodedUserId = 1
  const bookDetails = {
    userId: hardCodedUserId,
    bookApiId: bookApiId.isbn
  }
  console.log(bookDetails)
  return request
    .delete('/api/v1/books/')
    .send(bookDetails)
    .then((res) => {
      console.log('delBookFromList > res', res)
      return res.body
    })
}
