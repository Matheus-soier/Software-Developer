const express = require("express");
const app = express();
const agendamentos = require('./banco');

app.listen(8001,() => {
    console.log("Servidor Ativo!");
});

app.get('/',(res)=>{
    res.send("Págona Principal");
});

app.get("/cadastrar/:nome/:endereco/:bairro/:cep",(req, res)=>{
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
    });
    res.send("Registro inserido com sucesso!");
});
