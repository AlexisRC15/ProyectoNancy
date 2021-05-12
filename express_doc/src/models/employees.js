const mysqlDB = require('../../databases');

module.exports = {
    getEmployees() {
        return new Promise((resolve, reject) => {
            mysqlDB.query('SELECT * FROM employees', (err, rows, field) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    insertEmployee(name, salary) {
        return new Promise((res, rej) => {
            mysqlDB.query('INSERT INTO employees (name, salary) values(?, ?)', [name, salary], (err, rows, field) => {
                if(err) {
                    rej(err);
                } else {
                    res(rows.insertId);
                }
            });
        });
    }
}