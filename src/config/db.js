//requerimos la libreria mysql2
const mysql = require('mysql2')


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '15975328465Vane.6',
    port: 3306,
    database: 'mydb'
})

global.db = pool.promise()