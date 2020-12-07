import request from 'superagent'

export const getFilmList = (user) => {
  const hardCodedUserId = 1
  return request.get(`/api/v1/films/${hardCodedUserId}`).then((res) => {
    console.log(res)
    return res.body
  })
}

export const postFilmToList = (newFilm) => {
  // To be called when user clicks Add button on a search result

  console.log('nF', newFilm)
  const hardCodedUserId = 1
  const { imdbID, Title, Year, Poster } = newFilm // different data and newFilm
  const filmDetails = {
    userId: hardCodedUserId,
    filmApiId: imdbID,
    title: Title,
    year: Year,
    imageUrl: Poster
  }
  console.log('filmDetails', filmDetails)
  return request
    .post('/api/v1/films/')
    .send(filmDetails)
    .then((res) => {
      console.log(res)
      return res.body
    })
}

export const delFilmFromList = (filmApiId) => {
  // To be called when user clicks Remove button on their list.

  console.log(filmApiId)
  console.log('filmApiId what format is this?', filmApiId)
  const hardCodedUserId = 1
  const filmDetails = {
    userId: hardCodedUserId,
    filmApiId: filmApiId.imdbID
  }
  console.log(filmDetails)
  return request
    .delete('/api/v1/films/')
    .send(filmDetails)
    .then((res) => {
      console.log('delFilmFromList > res', res)
      return res.body
    })
}
