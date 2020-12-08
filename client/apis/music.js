import request from 'superagent'

export const getMusicList = (user) => {
  const hardCodedUserId = 1
  return request.get(`/api/v1/music/${hardCodedUserId}`).then((res) => {
    console.log(res)
    return res.body
  })
}

export const postMusicToList = (newMusic) => {
  console.log(newMusic)
  const hardCodedUserId = 1
  const { image, musicApiId, title, artist, album } = newMusic
  const musicDetails = {
    userId: hardCodedUserId,
    imageUrl: image,
    artist: artist,
    songApiId: musicApiId,
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
  const hardCodedUserId = 1
  const musicDetails = {
    userId: hardCodedUserId,
    // need a property?
    musicApiId: musicApiId.musicApiId
  }
  return request
    .delete()
    .send(musicDetails)
    .then((res) => {
      console.log('delMusicFromList > res', res)
      return res.body
    })
}
