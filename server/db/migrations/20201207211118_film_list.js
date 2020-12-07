exports.up = function (knex) {
  return knex.schema.createTable('film_list', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')// how to make a foreign key
    table.string('film_api_id')
    table.string('title')
    table.string('year')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('film_list')
}
