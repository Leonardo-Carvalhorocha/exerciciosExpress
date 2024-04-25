const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(
  express.urlencoded({
  extended: true,
}),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates');

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/useform.html`)
})

app.post('/users/save', (req, res) => {
  const nome = req.body.name;
  const age = req.body.age;
  console.log(`O nome do usuário é ${nome} e sua idade é de ${age} anos.`)

  res.sendFile(`${basePath}/useform.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
  console.log(`app rodando na porta PORT:${port}`);
})

