const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql-db',
    user: 'root',
    password: 'Dragon2307*',
    database: 'venta_jugos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL correctamente');
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM tb_cliente', (err, results) => {
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