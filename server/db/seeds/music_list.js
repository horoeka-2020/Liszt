exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('song_list')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('song_list').insert([
        {
          id: 1,
          user_id: 1,
          song_api_id: '561856792',
          artist: 'Lady Gaga',
          title: 'Always Remember Us This Way',
          album: 'A Star Is Born Soundtrack',
          image_url: 'https://api.deezer.com/album/74434962/image'
        }
      ])
    })
}
