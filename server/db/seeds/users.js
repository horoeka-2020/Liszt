exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          full_name: 'Kenneth Cruz',
          hash: 'pass'
        },
        {
          id: 2,
          full_name: 'Tom Griffin',
          hash: 'pass'
        }
      ])
    })
}
