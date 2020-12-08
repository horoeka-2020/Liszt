const express = require('express')
const path = require('path')

const bookRoutes = require('./routes/books')
const songRoutes = require('./routes/songs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', bookRoutes)

server.use('/api/v1/songs', songRoutes)

module.exports = server
