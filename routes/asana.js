var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const objection = require('objection');


router.get('/', (req, res, next) => {
  return knex('asana')
      .then(data => {
        return Promise.all(data.map(asana => {
          return knex('asana_sequence').where('asanaID', asana.id).pluck('id')
            .then(asanaSequences => {
              asana.asanaSequences = asanaSequences;
              return asana;
            });
        }))
      })
      .then(asanas => {
        res.json({asanas: asanas});
      });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('asana').where('id', id).first()
    .then(data => {
      return knex('asana_sequence').where('asanaID', id).pluck('id')
        .then(asanaSequences => {
          var result = {
            asana: {
              id: data.id,
              name: data.name,
              description: data.description,
              time: data.time,
              imageURL: data.imageURL,
              audioURL: data.audioURL,
              firstTarget: data.firstTarget,
              secondTarget: data.secondTarget,
              thirdTarget: data.thirdTarget,
              asanaSequences: asanaSequences
            }
          };
          res.json(result);
        });
    });
});

router.post('/', (req, res, next) => {
  let data = req.body;
  return knex('asana').insert({
    name: data.name,
    description: data.description,
    time: data.time,
    imageURL: data.imageURL,
    audioURL: data.audioURL,
    firstTarget: data.firstTarget,
    secondTarget: data.secondTarget,
    thirdTarget: data.thirdTarget
  })
    .returning('*')
    .then(asana => {
      res.json(asana);
    });
});

router.patch('/:id', (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  return knex('asana').where('id', id).update(data)
    .returning('*')
    .then(asana => {
      res.json(asana);
    });
});

module.exports = router;
