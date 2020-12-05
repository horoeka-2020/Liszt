import request from 'superagent'

// Won't use rootURL. Delete if can get these routes to work
// const rootURL = '/api/v1/books'

export function getBookList (user) {
  const hardCodedUserId = 1
  return request.get(`/api/v1/books/${hardCodedUserId}`)
    .then((res) => {
      console.log(res)
      return res.body.books
    })
}
