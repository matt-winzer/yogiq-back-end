exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "sequence"; ALTER SEQUENCE sequence_id_seq RESTART WITH 6;')
    .then(function () {
      var sequences = [{
        id: 1,
        yogiID: 1,
        name: 'Relax Before Bed'
      }, {
        id: 2,
        yogiID: 2,
        name: 'Morning Warmup'
      }, {
        id: 3,
        yogiID: 2,
        name: 'Midday Stress Relief'
      }, {
        id: 4,
        yogiID: 2,
        name: 'Open the Hips'
      }, {
        id: 5,
        yogiID: 2,
        name: 'Pure Relaxation'
      }];
      return knex('sequence').insert(sequences);
    });
};
