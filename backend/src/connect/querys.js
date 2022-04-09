const pool = require("../connect/connect");

const exesql = (sql, res) => {
    const promise = pool.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
};
module.exports = exesql;
