/**
 * index.js
 * Aplicativo principal.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um aplicativo "Express".
const app = express();

const cors = require("cors");

app.use(cors());

// Faz configuração do aplicativo.
const conf = require('dotenv').config().parsed;

// Faz configuração da porta do servidor HTTP.
const port = conf.HTTPPORT || 3000;

// Importa as listas de rotas.
const appRouter = require('./control/routes');

// Inicia monitoramento das rotas.
app.use(appRouter);

// Executa o servidor HTTP.
app.listen(port, () => {
  console.clear();
  console.log(`Executando servidor em http://localhost:${port}`);
});

