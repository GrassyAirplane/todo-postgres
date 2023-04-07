const Pool = require("pg").Pool
const secrets = require('./secret.js');

const pool = new Pool({
    user: "postgres",
    password: secrets.password,
    host: "localhost",
    port: "5432",
    database: "perntodo"
})

module.exports = pool;