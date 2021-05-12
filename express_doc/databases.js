const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company',
});


// connection.connect(function(err) {
//     if(!err) {
//         console.log('DB connected');
//     } else {
//         console.log(err);
//     }
// });


module.exports = connection;