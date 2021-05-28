const express = require('express');

// Criando servidor HTTP e retornando uma resposta
const app = express();

// Metodo GET
app.get('/meusprojetos', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
})

// Metodo POST
app.post('/meusprojetos', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
})

// Metodo PUT
app.put('/meusprojetos/:idAltereEsteParametro', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
})

// Metodo Delete
app.delete('/meusprojetos/:idAltereEsteParametro', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
})

// Especificando porta e retornando mesagem no terminal
app.listen(3333, () => {
    console.log('🐱‍🏍Back-end started!✌')
});
