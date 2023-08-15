require('dotenv').config()

const mySql = require('mysql2')

const knex = require('knex')({
  client: 'mysql2',
  connection: {
  host: process.env.HOST,
  port: 3306,
  user: process.env.DB_POST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
  }
  });

  module.exports = {
    knex
  }