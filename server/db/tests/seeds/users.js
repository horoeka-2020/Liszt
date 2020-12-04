exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'Kenneth Cruz',
          hash: 'pass'
        },
        {
          id: 2,
          user_name: 'Tom Griffin',
          hash: 'pass'
        },
        {
          id: 3,
          user_name: 'Tai Hona',
          hash: 'pass'
        }
      ])
    })
}
