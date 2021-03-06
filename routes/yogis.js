var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const objection = require('objection');


router.get('/', (req, res, next) => {
  return knex('yogi')
      .then(data => {
        return Promise.all(data.map(yogi => {
          return knex('sequence').where('yogiID', yogi.id).pluck('id')
            .then(sequences => {
              yogi.sequences = sequences;
              return yogi;
            });
        }))
      })
      .then(yogis => {
        res.json({yogis: yogis});
      });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('yogi').where('id', id).first()
    .then(data => {
      return knex('sequence').where('yogiID', id).pluck('id')
        .then(sequences => {
          var result = {
            yogi: {
              id: data.id,
              username: data.username,
              email: data.email,
              password: data.password,
              bio: data.bio,
              profilePic: data.profilePic,
              dateCreated: data.dateCreated,
              sequences: sequences
            }
          };
          res.json(result);
        });
    });
});

module.exports = router;
