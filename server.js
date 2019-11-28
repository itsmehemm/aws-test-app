const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.header('content-type', 'text/html').send(`
        <html>
            <head>
                <title> Hemanth Murali </title>
            </head>
            <body>
                <div style="text-align: center;"> Hello World!</div>
            </body>
        </html>`);
});

app.listen(4001, () => console.log('App running!'));