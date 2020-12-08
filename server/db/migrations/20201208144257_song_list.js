exports.up = (knex) => {
  return knex.schema.createTable('song_list', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('image_url')
    table.string('artist')
    table.string('song_api_id')
    table.string('album')
    table.string('title')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('song_list')
}
