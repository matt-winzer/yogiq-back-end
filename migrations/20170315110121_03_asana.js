exports.up = function(knex, Promise) {
  return knex.schema.createTable('asana', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.text('imageURL');
    table.text('audioURL');
    table.text('firstTarget');
    table.text('secondTarget');
    table.text('thirdTarget');
  });
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('asana');
};
