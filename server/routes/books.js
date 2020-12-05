const express = require('express')

const db = require('../db/books')

const router = express.Router()

router.get('/:userId', (req, res) => {
  db.getUserBooksList(req.params.userId)
    .then(books => {
      return res.json({ books })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/:userId', (req, res) => {
  const { userId, bookApiId, imageUrl } = req.body
  const newBook = { userId, bookApiId, imageUrl }
  db.addBooksToBookList(newBook)
    .then(() => db.getUserBooksList(req.params.userId))
    .then((books) => {
      res.json(books)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/:userId', (req, res) => {
  const delBook = (req.params.id)
  db.removeBooksFromBooklist(delBook)
    .then(db.getUserBookslist)
    .then((books) => {
      res.json(books)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
module.exports = router
