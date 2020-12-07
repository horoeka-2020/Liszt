const express = require('express')

const db = require('../db/films')

const router = express.router()

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
  const { title, year, director, plot, runningTime, imageUrl } = req.body
  const newFilm = { title, year, director, plot, runningTime, imageUrl }
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
  const { imdbId, userId } = (req.body)
  db.removeFilmsFromFilmList(imdbId, userId)
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
