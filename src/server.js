const porta = 3000;

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.param.id));
});

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        descricao: req.body.descricao,
        quantidade: req.body.quantidade,
        precoCusto: req.body.precoCusto,
        precoVenda: req.body.precoVenda,
        categoria: req.body.categoria,
    });
    res.send(produto) //retorna produtos formato JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});
