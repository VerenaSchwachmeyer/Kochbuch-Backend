const { Pool } = require("pg");

const { PGCONNECTIONSTRING } = process.env;

const pool = new Pool({
  // user: PGUSER,
  // host: PGHOST,
  // database: PGDATABASE,
  // password: PGPASSWORD,
  // port: PGPORT
  PGCONNECTIONSTRING,
});

module.exports = pool;
