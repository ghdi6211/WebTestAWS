const mysql =require('mysql')

const db = mysql.createPool({
    host: '18.179.241.81',
    port: '3306',
    user: 'root',
    password: '000000',
    database: 'TestDB'
})

module.exports =db