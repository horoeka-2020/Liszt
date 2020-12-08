exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('song_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_list').insert([
        { id: 1, user_id: 'Oh no! they killed Kenny!' },
        { id: 2, user_id: 'Ooo, Tommy Gheee in the house' },
        { id: 3, user_id: 'Well well well, if it aint Al Zubaidi' }
      ])
    })
}
