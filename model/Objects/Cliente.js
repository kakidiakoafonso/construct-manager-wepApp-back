const Pessoa = require('./Pessoa')

class Cliente extends Pessoa
{
    constructor(nome, sexo,endereco,privado)
    {
        super(nome,sexo)
        this.endereco = endereco;
        this.privado = privado
    }
    getEndereco() {return this.endereco}
    setEndereco(e) {this.endereco = e}
    getPrivado() {return this.privado}
    setPrivado(e) {this.privado = e}
}
module.exports = Cliente;