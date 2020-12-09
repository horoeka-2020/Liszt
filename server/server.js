const express = require('express')
const path = require('path')

const bookRoutes = require('./routes/books')
const filmRoutes = require('./routes/films')
const songRoutes = require('./routes/songs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', bookRoutes)
server.use('/api/v1/films', filmRoutes)

server.use('/api/v1/music', songRoutes)

module.exports = server
