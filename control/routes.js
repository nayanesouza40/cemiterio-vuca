

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

const cemiterioControl = require('./cemiterioControl'); // ok

router.get("/cemiterio/", cemiterioControl.getAll);
router.get("/cemiterio/:id", cemiterioControl.getOne);
router.post("/cemiterio/", bodyParser, cemiterioControl.post);
router.put("/cemiterio/:id", bodyParser, cemiterioControl.put);
router.delete("/cemiterio/:id", cemiterioControl.delete);

const pessoaControl = require('./pessoaControl');

router.get("/pessoa/", pessoaControl.getAll);
router.get("/pessoa/:id", pessoaControl.getOne);
router.post("/pessoa/", bodyParser, pessoaControl.post);
router.put("/pessoa/:id", bodyParser, pessoaControl.put);
router.delete("/pessoa/:id", pessoaControl.delete);

const familiaControl = require('./familiaControl'); // ok

router.get("/familia/", familiaControl.getAll);
router.get("/familia/:id", familiaControl.getOne);
router.post("/familia/", bodyParser, familiaControl.post);
router.put("/familia/:id", bodyParser, familiaControl.put);
router.delete("/familia/:id", familiaControl.delete);

const tumuloControl = require('./tumuloControl'); // ok

router.get("/tumulo/", tumuloControl.getAll);
router.get("/tumulo/:id", tumuloControl.getOne);
router.post("/tumulo/", bodyParser, tumuloControl.post);
router.put("/tumulo/:id", bodyParser, tumuloControl.put);
router.delete("/tumulo/:id", tumuloControl.delete);

const funcionarioControl = require('./funcionarioControl'); // ok

router.get("/funcionario/", funcionarioControl.getAll); 
router.get("/funcionario/:id", funcionarioControl.getOne);
router.post("/funcionario/", bodyParser, funcionarioControl.post); 
router.put("/funcionario/:id", bodyParser, funcionarioControl.put);
router.delete("/funcionario/:id", funcionarioControl.delete);

// Exporta o módulo.
module.exports = router;

