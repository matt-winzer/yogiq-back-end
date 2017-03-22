var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const objection = require('objection');

router.get('/', (req, res, next) => {
  if (req.query.filter) {
    let sequence = req.query.filter.sequence;
    return knex('asana_sequence').where('sequenceID', sequence)
      .then(data => {
        var result = {
          asanasequences: data
        };
        res.json(result);
      });
  } else {
    return knex('asana_sequence')
      .then(data => {
        var result = {
          asanasequences: data
        };
        res.json(result);
      });
  }
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('asana_sequence').where('id', id)
      .then(data => {
        var result = {
          asanasequence: data
        };
        res.json(result);
      });
});

router.put('/:id', (req, res, next) => {
  console.log(req.body.asanasequence);
  let id = req.params.id;
  let data = req.body.asanasequence;
  return knex('asana_sequence').where('id', id).update(data)
    .returning('*')
    .then(asanasequence => {
      res.json({asanasequence: asanasequence});
    });
});

module.exports = router;
