import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        "Backend Iniciado!"
    ]);
});

app.listen(3333);