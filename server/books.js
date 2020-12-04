const express = require('express')

const db = require('../db/book_list')

const router = express.Router()

router.get('/books/:userId', (req, res) => {
  db.getUserBookList(req.params.userId)
    .then(books => {
      return res.json({ books })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/books/:userId/:id', (req, res) => {
  db.getUserBookById(req.params.userId, req.params.id)
    .then(book => {
      return res.json(book)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
module.exports = router
