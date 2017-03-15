exports.up = function(knex, Promise) {
  return knex.schema.createTable('yogi', (table) => {
    table.increments();
    table.text('username').unique().notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.text('bio');
    table.text('profilePic').defaultTo('http://www.hbc333.com/data/out/190/47199326-profile-pictures.png');
    table.date('dateCreated').notNullable();
  });
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('yogi');
};
