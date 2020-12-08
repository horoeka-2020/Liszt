const express = require('express')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then((results) => {
//       res.json({ fruits: results.map((fruit) => fruit.name) })
//       return null
//     })
//     .catch((err) => {
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

module.exports = router
