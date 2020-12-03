exports.up = (knex) => {
  return knex.schema.createTable('book_list', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')// how to make a foreign key
    table.string('title')
    table.string('author')
    table.string('published_date')
    table.varchar('description')
    table.string('image_url')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('book_list')
}
