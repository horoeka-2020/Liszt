import request from 'superagent'

export const getBookList = (user) => {
  const hardCodedUserId = 1
  return request.get(`/api/v1/musics/${hardCodedUserId}`).then((res) => {
    console.log(res)
    return res.body
  })
}

export const postMusicToList = (newMusic) => {
  const hardCodedUserId = 1
  const { image } = newMusic
  const musicDetails = {
    userId: hardCodedUserId,
    imageUrl: image
  }
  return request
    .post('/api/v1/music/')
    .send(musicDetails)
    .then((res) => {
      return res.body
    })
}

export const delMusicFromList = (musicApiId) => {
  console.log(musicApiId)
  const hardCodedUserId = 1
  const musicDetails = {
    userId: hardCodedUserId,
    // need a propperty?
    musicApiId: musicApiId.isbn
  }
  return request
    .delete()
    .send(musicDetails)
    .then((res) => {
      console.log('delMusicFromList > res', res)
      return res.body
    })
}
