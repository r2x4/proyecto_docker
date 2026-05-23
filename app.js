const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'testdb'
});

app.get('/', (req, res) => {

    connection.query('SELECT NOW() AS fecha', (err, results) => {

        if (err) {
            return res.send('Error conectando a MySQL');
        }

        res.send('Conexión exitosa con Docker y MySQL: ' + results[0].fecha);
    });

});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});