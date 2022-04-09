var mysql = require("mysql");
require("dotenv").config();
var pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
});

module.exports = pool;
