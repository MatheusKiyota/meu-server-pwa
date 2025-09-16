const express = require('express');
const path = require('path');
const controle = require('./controladores/controle');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta public (index.html estará acessível em /)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas que usam os controladores
app.get('/login', controle.homePage);
app.get('/cadastrar', controle.sobrePage);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
