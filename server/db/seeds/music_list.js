exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('song_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_list').insert([
        { id: 1, user_id: 1 },
        { id: 2, user_id: 2 },
        { id: 3, user_id: 3 }
      ])
    })
}
