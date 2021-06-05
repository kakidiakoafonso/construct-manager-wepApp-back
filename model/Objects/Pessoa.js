class Pessoa
{
    constructor(nome,sexo)
    {
        this.nome = nome;
        this.sexo = sexo;
    }
    getNome() {return this.nome}
    setNome(nome) {this.nome = nome}

    getSexo() {return this.sexo}
    setSexo(sexo) {this.sexo = sexo}
}

module.exports = Pessoa;