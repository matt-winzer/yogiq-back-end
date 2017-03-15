exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "yogi"; ALTER SEQUENCE yogi_id_seq RESTART WITH 3;')
    .then(function () {
      var yogis = [{
        id: 1,
        username: 'sam',
        email: 'sam@gmail.com',
        password: 'cheese',
        bio: 'Sam is the man',
        dateCreated: new Date()
      }, {
        id: 2,
        username: 'alex',
        email: 'alex@gmail.com',
        password: 'crackers',
        bio: 'Alex is not the man',
        dateCreated: new Date()
      }];
      return knex('yogi').insert(yogis);
    });
};
