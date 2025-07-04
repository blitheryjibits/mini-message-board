const process = require('node:process');
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_RAILWAY_STRING,
      ssl: {
    rejectUnauthorized: false, // Required for Railway's SSL
  },
})

module.exports = pool;
