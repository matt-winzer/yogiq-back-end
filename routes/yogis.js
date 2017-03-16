var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const objection = require('objection');

router.get('/', (req, res, next) => {
  return knex('yogi')
      .then(data => {
        var result = {
          yogis: data
        };
        res.json(result);
      });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('yogi').where('id', id).first()
    .then(data => {
      return knex('sequence').where('yogiID', id).pluck('id')
        .then(sequences => {
          var result = {
            yogi: data,
            sequences: sequences
          };
          res.json(result);
        });
    });
});

module.exports = router;
