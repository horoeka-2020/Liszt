const express = require('express')

const db = require('../db/songs')

const router = express.Router()

router.get('/:userId', (req, res) => {
  db.getUserSongsList(req.params.userId)
    .then(songs => {
      return res.json({ songs })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const { userId } = req.body
  const newSong = { userId }
  db.addSongsToSongList(newSong)
    .then(() => db.getUserSongsList(userId))
    .then((songs) => {
      res.json(songs)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/', (req, res) => {
  const { songApiId, userId } = (req.body)
  db.removeSongsFromSongList(songApiId, userId)
    .then(() => db.getUserSongsList(userId))
    .then((songs) => {
      res.json(songs)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
module.exports = router
