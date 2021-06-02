const express = require('express');
const { uuid } = require('uuidv4') // uuid tem a mesma função aqui que o comando next val no PLSQL

const app = express(); // Criando servidor HTTP e retornando uma resposta

app.use(express.json()); // Indico que eu usarei o express

const projects = []; // Somente utilizar em HML

// Metodo GET
app.get('/projects', (request, response) => {

    const { title } = request.query

    const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results); // Tudo que será retornado para o usuário em arquivo JSON
});

// Metodo POST
app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

// Metodo PUT
app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    // Se nao encontrou o projectIndex
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found' })
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return response.json(project);
});

// Metodo Delete
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);
 
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found' });
    }
    projects.splice(projectIndex, 1);

    return response.status(204).send(); // Retornar em branco (recomenda-se usar erro 204)
})

// Especificando porta e retornando mesagem no terminal
app.listen(3333, () => {
    console.log('🐱‍🏍Back-end started!✌')
});
