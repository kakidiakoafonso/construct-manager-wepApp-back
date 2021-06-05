const Projetos = require('./Projetos')

class Predio extends Projetos
{
    constructor(nome,descricao,cliente, orcamento, codigoIdentificacao, dataInicio, 
        duracao,arquiteto, percentualConformidade, alturaMaxima, endereco, tipo )
    {
        super(nome,descricao,cliente, orcamento, codigoIdentificacao, dataInicio, 
            duracao,arquiteto, percentualConformidade )
            this.alturaMaxima = alturaMaxima;
            this.endereco = endereco;
            this.tipo = tipo; 
    }
    getAlturaMaxima() { return this.alturaMaxima}
    setAlturaMaxima(e) { this.alturaMaxima = e}

    getEndereco() { return this.endereco}
    setEndereco(e) { this.endereco = e}

    getTipo() { return this.tipo}
    setTipo(e) { this.tipo = e}
}
module.exports = Predio;