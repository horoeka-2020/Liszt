const express = require('express')

const db = require('../db/films')

const router = express.Router()

router.get('/:userId', (req, res) => {
  db.getUserFilmsList(req.params.userId)
    .then(films => {
      return res.json({ films })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const { userId, title, year, filmApiId, imageUrl } = req.body
  const newFilm = { userId, title, year, filmApiId, imageUrl }
  db.addFilmsToFilmList(newFilm)
    .then(() => db.getUserFilmsList(userId))
    .then((films) => {
      res.json(films)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/', (req, res) => {
  const { filmApiId, userId } = (req.body)
  db.removeFilmsFromFilmList(filmApiId, userId)
    .then(() => db.getUserFilmsList(userId))
    .then((films) => {
      res.json(films)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
module.exports = router
