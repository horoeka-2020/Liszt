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
  const { image, isbn, title, description, author } = newFilm // different data and newFilm
  const filmDetails = {
    // userId: hardCodedUserId,
    // bookApiId: isbn,
    // imageUrl: image,
    // author: author,
    // title: title,
    // description: description
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
  const hardCodedUserId = 1
  const filmDetails = {
    userId: hardCodedUserId,
    filmApiId: filmApiId.isbn
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
