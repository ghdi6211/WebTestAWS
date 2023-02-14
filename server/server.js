const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db =require('./config/db')
const cors = require('cors');

var corsOptions = {
    origin: "http://18.179.241.81"
}

const mysql =require('mysql');

const connection = mysql.createPool({
    host: '18.179.241.81',
    port: '3306',
    user: 'root',
    password: '000000',
    database: 'TestDB'
})

connection.connect((err) => {
    if(err) {
        console.log('error conneting:' + err.stack);
        return;
    }
    console.log('success');
})

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    console.log('root');
})
app.get('/words', (req, res) => {
    console.log('/words');
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})