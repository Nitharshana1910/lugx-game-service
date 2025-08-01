const { Pool } = require('pg');

const pool = new Pool({
  host: 'postgres',       
  user: 'postgres',
  password: 'Admin1@3',
  database: 'lugx-gaming',
  port: 5432
});

module.exports = pool;
