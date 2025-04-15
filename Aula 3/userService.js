const User = require('./user');
const path = require('path'); // modulo para manipular caminhos
const fs = require('fs'); // modulo para manipular arquivos
const bcrypt = require('bcrypt'); // modulo para criptografar senha
const mysql = require("./mysql"); // importando funções de conexão com o Mysql

class userService {
    constructor(){
        this.filePath = path.join(__dirname, 'user.json');
        this.users = this.loadUsers();//Array para armazenar user
        this.nextid = this.getNextId();//icontador para gerar id
    }

    loadUsers(){
        try{
        if(fs.existsSync(this.filePath)) {//verifica se o arquivo existe
            const data = fs.readFileSync(this.filePath);//le o arquivo
            return JSON.parse(data);//transforma json em objeto
        }
    }catch(erro){
        console.log("Erro ao carregar o arquivo", erro)
    }
    return[]
}


getNextId(){ // função para buscar o próximo id
    try{
    if(this.users.length === 0) return 1;
    return Math.max(...this.users.map(user => user.id))+1
}catch (erro){
    console.log('Erro ao buscar o id', erro)
}
}

saveUsers(){//função para salvar os arquivos
    try{
        fs.writeFileSync(this.filePath, JSON.stringify(this.users));
    }catch(erro){
        console.log("Erro ao salvar arquivos", erro)
    }
}

   
    }

    getUsers()
        return this.users
    

    deleteUser(id)
        try{
            this.users = this.users.filter(user => user.id !== id);
            this.saveUsers();
        }catch{
            console.log("Erro ao deletar o usuário", erro)
        }
    

    updateUser(id, nome, email, senha, endereco, telefone, cpf)
        try{
            const user = this.users.find(user => user.id === id);
            if(!user) return console.log("Usuário não existente/encontrado");
            user.nome = nome;
            user.email = email;
            user.senha = senha;
            user.endereco = endereco;
            user.telefone = telefone;
            user.cpf = cpf;
            this.saveUsers();
            return user;
        }catch(erro){
            console.log("Erro ao atualizar o usuário", erro)
        }


module.exports = new userService;