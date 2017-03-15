var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
  return knex('asana_sequence')
      .then(data => {
        var result = {
          sequences: data
        };
        res.json(result);
      });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('asana_sequence').where('sequenceID', id)
      .then(data => {
        var result = {
          sequence: data
        };
        res.json(result);
      });
});

module.exports = router;
