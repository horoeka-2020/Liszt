const connection = require('./connection')

module.exports = {
  getUserSongsList,
  addSongsToSongList,
  removeSongsFromSongList
}

function getUserSongsList (userId, db = connection) {
  return db('song_list')
    .where('user_id', userId)
    .select('id', 'user_id as userId')
}

function addSongsToSongList (newSong, db = connection) {
  return db('song_list')
    .insert({
      user_id: newSong.userId,
      song_api_id: newSong.songApiId,
      title: newSong.title,
      artist: newSong.artist,
      image_url: newSong.imageUrl
    })
}

function removeSongsFromSongList (songApiId, userId, db = connection) {
  return db('song_list')
    .delete()
    .where('song_api_id', songApiId)
    .where('user_id', userId)
    // eslint-disable-next-line promise/always-return
    .then(count => {
      console.log('Number of records deleted:', count)
    })
}
