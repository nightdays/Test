let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: '120.24.235.91',
    user: 'root',
    password: 'Nuoyadb_1',
    database: 'test'
})