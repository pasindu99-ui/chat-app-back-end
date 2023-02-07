
const { Pool } = require("pg");

const pool = new Pool({
  host:"localhost",
  user:"postgres",
  port:"5432",
  password:"myorange2000",
  database:"postgres"
});
if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}

module.exports = pool;
