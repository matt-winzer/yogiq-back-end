const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

//needs to go in any file where you are writing queries
const objection = require('objection');

const Model = objection.Model;
const knex = require('knex')(config);
Model.knex(knex);

module.exports = knex;
