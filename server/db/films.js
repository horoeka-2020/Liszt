const connection = require('./connection')

module.exports = {
  getUserFilmsList,
  addFilmsToFilmList,
  removeFilmsFromFilmList
}

function getUserFilmsList (userId, db = connection) {
  return db('book_list').where('user_id', userId).select('id', 'user_id as userId', 'imdb_id as imdbId', 'title', 'year', 'plot', 'running_time as runningTime', 'image_url as imageUrl')
}

function addFilmsToFilmList (newFilm, db = connection) {
  return db('book_list')
    .insert({
      userId: newFilm.userId,
      imdb_id: newFilm.imdbId,
      title: newFilm.title,
      year: newFilm.year,
      plot: newFilm.plot,
      running_time: newFilm.runningTime,
      image_url: newFilm.imageUrl
    })
}

function removeFilmsFromFilmList (imdbId, userId, db = connection) {
  return db('film_list')
    .delete()
    .where('imdb_id', imdbId)
    .where('user_id', userId)
  // eslint-disable-next-line promise/always-return
    .then(count => {
      console.log('Number of records deleted:', count)
    })
}
