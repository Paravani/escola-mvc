const express = require('express'); 

// variavel Controllers

const cursoController = require('./controllers/curso.controller');
const alunoController = require('./controllers/alunos.controller');
const professorController = require('./controllers/professor.controller');


const app = express();


app.get('/cursos', cursoController.listar);
app.post('/cursos', cursoController.criar);
app.delete('/cursos/:id', cursoController.deletar);
app.put('/cursos/:id', cursoController.atualizar);

app.get('/alunos', alunoController.listar);
app.post('/alunos', alunoController.criar);
app.delete('/alunos/:id', alunoController.deletar);
app.put('/alunos/:id', alunoController.atualizar);

app.get('/professores', professorController.listar);
app.post('/professores', professorController.criar);
app.delete('/professores/:id', professorController.deletar);
app.put('/professores/:id', professorController.atualizar);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});