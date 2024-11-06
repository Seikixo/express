const { Pool } = require('pg');
const pool = new Pool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'express'
})

module.exports = pool;