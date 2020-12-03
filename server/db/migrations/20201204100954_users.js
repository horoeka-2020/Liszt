exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('full_name')
    table.binary('hash')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
