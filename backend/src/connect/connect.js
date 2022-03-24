var mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "ject",
    password: "211118",
    database: "grupomc",
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
});

module.exports = pool;
