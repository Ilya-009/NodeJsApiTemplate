const mysql = require('mysql');

const dbPool = mysql.createPool({
    password : 'qwerty123',
    user : 'root',
    database : 'accessoiresdb',
    host : 'localhost',
    port : '3406',
    insecureAuth : true
});

module.exports = dbPool;
