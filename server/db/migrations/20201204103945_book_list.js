exports.up = (knex) => {
  return knex.schema.createTable('book_list', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')// how to make a foreign key
    table.string('title')
    table.string('book_api_id')
    table.string('image_url')
    table.string('author')
    table.string('description')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('book_list')
}
