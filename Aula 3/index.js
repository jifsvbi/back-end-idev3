const express = require('express');
const userService = require('./userService');

const app = express(); // nome qualquer para express
app.use(express.json()); // vou habilitar json no express

//rota para criar usuario

app.post("/users", (req, res) =>{
    const {nome, email} = req.body
    if(!nome || !email){
        return res.status(400).json
        ({error: "Nome, email e senha são obrigatorios"})
    }

    const user = userService.addUser(nome, email);
    res.status(200).json({user});
})

//rota para listar todos os usuarios
app.get("/users", (req, res) =>{
    res.json(userService.getUsers());
});

//Rota para excluir um usuário pelo ID
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    //converter o ID para número
    try {
        const resultado = userService.deleteUser(id);
        //Tenta excluir o usuário
        res.status(200).json(resultado);
        //retornar a mensagem de sucesso
    } catch (erro){
        res.status(404).json({ error: erro.message});
        //Retornar a mensagem de erro
    }
});

const port = 3000;

app.listen(port, () =>{
    console.log("Servidor rodando na porta:", port);
})