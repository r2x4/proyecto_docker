const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Dragon2307*',
    database: process.env.DB_NAME || 'venta_jugos',
    charset: 'utf8mb4'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL correctamente');
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    connection.query('SELECT * FROM tb_cliente', (err, results) => {
        if (err) {
            console.error(err);
            return res.send('Error conectando a MySQL');
        }

        let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Venta de Jugos</title>
        </head>
        <body>
            <h1>Clientes - Venta de Jugos</h1>
            <table border="1">
                <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Límite Crédito</th>
                </tr>
        `;

        results.forEach(cliente => {
            html += `
                <tr>
                    <td>${cliente.DNI}</td>
                    <td>${cliente.NOMBRE}</td>
                    <td>${cliente.CIUDAD}</td>
                    <td>${cliente.SEXO}</td>
                    <td>${cliente.EDAD}</td>
                    <td>$${cliente.LIMITE_CREDITO}</td>
                </tr>
            `;
        });

        html += `
            </table>
            <br>
            <strong>Total clientes:</strong> ${results.length}
        </body>
        </html>
        `;

        res.send(html);
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});