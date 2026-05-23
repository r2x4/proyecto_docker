const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'host.docker.internal',
    user: 'root',
    password: 'Dragon2307*',
    database: 'venta_jugos'
});

app.get('/', (req, res) => {

    connection.query('SELECT * FROM clientes', (err, results) => {

        if (err) {
            console.error(err);
            return res.send('Error conectando a MySQL');
        }

        res.json(results);
    });

});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});