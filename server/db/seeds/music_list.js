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
          image_url:
            'https://cdns-images.dzcdn.net/images/cover/88a8288e14f61ffa39c14ac2ef9210d8/500x500-000000-80-0-0.jpg'
        }
      ])
    })
}
