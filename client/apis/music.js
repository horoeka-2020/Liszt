import request from 'superagent'

export const getMusicList = (user) => {
  const hardCodedUserId = 1
  return request.get(`/api/v1/music/${hardCodedUserId}`).then((res) => {
    console.log(res)
    return res.body
  })
}

export const postMusicToList = (newMusic) => {
  console.log('newMusic from client api', newMusic)
  const hardCodedUserId = 1
  const { image, id, title, artist, album } = newMusic
  const musicDetails = {
    userId: hardCodedUserId,
    imageUrl: image,
    artist: artist,
    songApiId: id,
    album: album,
    title: title
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
  console.log('musicApiId what format is this?', musicApiId)
  const hardCodedUserId = 1
  const musicDetails = {
    userId: hardCodedUserId,
    // need a property?
    musicApiId: musicApiId.musicApiId
  }
  return request
    .delete('/api/v1/music/')
    .send(musicDetails)
    .then((res) => {
      console.log('delMusicFromList > res', res)
      return res.body
    })
}
