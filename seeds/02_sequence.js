exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "sequence"; ALTER SEQUENCE sequence_id_seq RESTART WITH 3;')
    .then(function () {
      var sequences = [{
        id: 1,
        yogiID: 1
      }, {
        id: 2,
        yogiID: 2
      }];
      return knex('sequence').insert(sequences);
    });
};
