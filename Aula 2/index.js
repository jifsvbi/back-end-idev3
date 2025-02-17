//classe base Usuario
class Usuario {
    constructor(nome, email, senha){
        this.none = nome;
        this.none = email;
        this._senha = senha;//atributo privado
    }

    autenticar(senha){
        return senha === this._senha;
    }

    alterarSenha(novaSenha){
        this._senha = novaSenha;
        console.log('senha alterada com sucesso');
    }
}

//classe admin que herda de Usuario
class Admin extends Usuario{
     constructor(nome, email, senha, nivelAcesso){
        super(nome, email, senha);
        this.nivelAcesso = nivelAcesso;
     }

     banirUsuario(Usuario){
          console.log('${Usuario.nome}foi banido pelo admin = ${this.nome}');
     }

    //polimorfismo sobrescrevendo o método autenticar
    autenticar(senha){
        return senha === this._senha && this.nivelAcesso === 'alto';
    }

}


//Exemplo de uso 
const Usuario1 = new Usuario('Luis', 'luiz@gmail.com','1234');
const Usuario2 = new Admin('Maria', 'Maria@gmail.com','6789', 'alto');
console.log(Usuario1.autenticar('1234')); //senha certa
console.log(Usuario2.autenticar('6789'));
Usuario2.banirUsuario(Usuario1);
