const connection = require('./connection')

module.exports = {
  getUserFilmsList,
  addFilmsToFilmList,
  removeFilmsFromFilmList
}

function getUserFilmsList (userId, db = connection) {
  return db('film_list')
    .where('user_id', userId)
    .select('id', 'user_id as userId', 'film_api_id as filmApiId', 'title', 'year', 'image_url as imageUrl')
    .orderBy('id', 'desc')
}

function addFilmsToFilmList (newFilm, db = connection) {
  return db('film_list')
    .insert({
      user_id: newFilm.userId,
      film_api_id: newFilm.filmApiId,
      title: newFilm.title,
      year: newFilm.year,
      image_url: newFilm.imageUrl
    })
}

function removeFilmsFromFilmList (filmApiId, userId, db = connection) {
  return db('film_list')
    .delete()
    .where('film_api_id', filmApiId)
    .where('user_id', userId)
  // eslint-disable-next-line promise/always-return
    .then(count => {
      console.log('Number of records deleted:', count)
    })
}
