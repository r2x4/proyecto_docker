app.get('/', (req, res) => {
    connection.query('SELECT * FROM tb_cliente', (err, results) => {

        if (err) {
            console.error(err);
            return res.send('Error conectando a MySQL');
        }

        let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Venta de Jugos</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th {
                    background-color: #007bff;
                    color: white;
                    padding: 10px;
                }
                td {
                    padding: 8px;
                    border: 1px solid #ddd;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>

        <h1>Clientes - Venta de Jugos</h1>

        <table>
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