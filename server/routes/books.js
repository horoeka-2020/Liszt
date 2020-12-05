const express = require('express')

const db = require('../db/books')

const router = express.Router()

router.get('/:userId', (req, res) => {
  db.getUserBookList(req.params.userId)
    .then(books => {
      return res.json({ books })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})                                                                                                                                                                                                                                                                                                           

router.post('/:userId', (req, res) => {
  const { user_id, book_api_id, image_url } = req.body
  const newBook =  { user_id, book_api_id, image_url }
  db.addBooksToBookList(newBook)
  .then(db.getUserBookList(req.params.userId))
  .then((books) => {
    res.json(books)
    return null
  })
  .catch(err => {
    res.status(500).json({ error: err.message })
  })
})

// router.get('/books/:userId/:id', (req, res) => {
//   db.getUserBookById(req.params.userId, req.params.id)
//     .then(book => {
//       return res.json(book)
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })
module.exports = router
