
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('full_name')
    table.binary('hash')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
