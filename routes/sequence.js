var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const objection = require('objection');

// router.get('/', (req, res, next) => {
//   return knex('sequence')
//       .then(data => {
//         var result = {
//           sequences: data
//         };
//         res.json(result);
//       });
// });

router.get('/', (req, res, next) => {
  return knex('sequence')
    .then(data => {
      return Promise.all(data.map(sequence => {
        return knex('asana_sequence').where('sequenceID', sequence.id).pluck('id')
          .then(asanasequences => {
            sequence.asanasequences = asanasequences;
            return sequence;
          });
      }));
    })
    .then(sequences => {
      res.json({sequences: sequences});
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  return knex('sequence').where('id', id).first()
    .then(data => {
      return knex('asana_sequence').where('sequenceID', id).pluck('id')
        .then(asanasequences => {
          var result = {
            sequence: {
              id: data.id,
              yogiID: data.yogiID,
              asanasequences: asanasequences
            }
          };
          res.json(result);
        });
    });
});

// router.get('/', (req, res, next) => {
//   return knex('sequence')
//       .then(data => {
//         return Promise.all(data.map(sequence => {
//           return knex('yogi').where('id', sequence.yogiID).first()
//             .then(yogi => {
//               sequence.yogi = yogi.id;
//               return sequence;
//             });
//         }))
//       })
//       .then(sequences => {
//         res.json({sequences: sequences});
//       });
// });

// router.get('/', (req, res, next) => {
//   return knex('sequence')
//       .then(data => {
//         return Promise.all(data.map(sequence => {
//           return knex('yogi').where('id', sequence.yogiID).first()
//             .then(yogi => {
//               sequence.yogi = yogi.id;
//               delete sequence.yogiID;
//               return sequence;
//             });
//         }))
//       })
//       .then(sequences => {
//         res.json({sequences: sequences});
//       });
// });

module.exports = router;
