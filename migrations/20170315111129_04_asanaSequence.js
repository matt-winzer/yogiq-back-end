exports.up = function(knex, Promise) {
  return knex.schema.createTable('asanaSequence', (table) => {
    table.increments();
    table.integer('asanaID').references('asana.id').unsigned().onDelete('cascade');
    table.integer('sequenceID').references('sequence.id').unsigned().onDelete('cascade');
    table.integer('sortOrder');
  });
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('asanaSequence');
};
