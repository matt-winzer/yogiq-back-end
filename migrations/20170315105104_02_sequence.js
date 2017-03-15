exports.up = function(knex, Promise) {
  return knex.schema.createTable('sequence', (table) => {
    table.increments();
    table.integer('yogiID').references('yogi.id').unsigned().onDelete('cascade');
  });
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sequence');
};
