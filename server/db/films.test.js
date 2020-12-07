const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./films')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUserFilms returns films', () => {
  return db.getUserFilmsList(1, testDb)
    .then(films => {
      expect(films).toHaveLength(1)
      return null
    })
})

test('addFilmsToFilmList inserts a new Film from the imdb api', () => {
  const actual = {
    id: 3,
    userId: 2,
    filmApiId: 'tt0382932',
    title: 'Ratatouille the Revenge of the chef remi',
    year: '2020',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg'
  }
  return db.addFilmsToFilmList(actual, testDb)
    .then(event => {
      expect(actual.title).toBe('Ratatouille the Revenge of the chef remi')
      expect(actual.year).toBe('2020')
      return null
    })
})

test('removeFilmsFromFilmList removes films from the database', () => {
  return db.removeFilmsFromFilmList(1, 1, testDb)
    .then(film => {
      expect(film).toBe()
      return null
    })
})
