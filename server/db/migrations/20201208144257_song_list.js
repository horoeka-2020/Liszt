
exports.up = (knex) => {
  return knex.schema.createTable('song_list', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('song_list')
}
