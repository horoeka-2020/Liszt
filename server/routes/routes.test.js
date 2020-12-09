const request = require('supertest')

const server = require('../server')
const db = require('../db/books')

jest.mock('../db/books')

const mockBooks = [
  {
    id: 1,
    userId: 1,
    bookApiId: '1bMXAAAAYAAJ',
    imageUrl: 'testImage1'
  },
  {
    id: 7,
    userId: 1,
    bookApiId: '1bMXAAAAYAAJ',
    imageUrl: 'testImage2'
  }]

describe('GET /api/v1/books', () => {
  it('responds with books on res body', () => {
    db.getUserBooksList.mockImplementation(() => Promise.resolve(mockBooks))
    return request(server)
      .get('/api/v1/books')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.books).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getUserBooksList.mockImplementation(() => Promise.reject(
      new Error('mock DB error')
    ))
    return request(server)
    .get('/api/v1/books')
    .expect('Content-Type', /json/)
    .expect(500)
    .then(res => {
      expect(res.body.error).toBe('mock DB error')
      return null
  })
})
