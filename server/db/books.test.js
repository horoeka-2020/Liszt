const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./books')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUserBooksList returns books', () => {
  return db.getUserBooksList(1, testDb)
    .then(book => {
      expect(book).toHaveLength(1)
      return null
    })
})

test('getBookById return property of the chosen id', () => {
  return db.getBooktById(2, testDb)
    .then(book => {
      expect(book.id).toBe(2)
      expect(book.book_api_id).toBe('i_AIO-T8TY4C')
      return null
    })
})

test('addBooksToBookList  inserts new Book from Api(mocked)', () => {
  const actual = {
    id: 3,
    userId: 1,
    bookApiId: '3-WEDwAAQBAJ',
    title: 'The Adventures of Oliver Twist',
    imageUrl: 'http://books.google.com/books/content?id=3-WEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    author: 'Paula Johanson',
    description: 'Chronicles the life of the pop music sensation, documenting her'
  }

  return db.addBooksToBookList(actual, testDb)
    .then(event => {
      expect(event).toHaveLength(1)
      return null
    })
})

test('removeBooksFromBookList remove book from database', () => {
  return db.removeBooksFromBookList(1, 1, testDb)
    .then(book => {
      expect(book).toBe()
      return null
    })
})
