const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('../db/migrations/20201204103945_book_list')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUserBooksList returns a book', () => {
  return db.getUserBooksList(1, testDb)
    .then(book => {
      expect(book).toHaveLength(1)
      return null
    })
})
