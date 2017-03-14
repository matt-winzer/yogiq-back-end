exports.up = function(knex, Promise) {
  return knex.schema.createTable('yogi', (table) => {
    table.increments();
    table.text('username').unique().notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.text('bio');
    table.text('profilePic');
    table.date('dateCreated').notNullable();
  });
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('yogi');
};
