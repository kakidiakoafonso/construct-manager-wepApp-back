const Projetos = require('./Projetos')

class Estradas extends Projetos
{
    constructor(nome,descricao,cliente, orcamento, codigoIdentificacao, dataInicio, 
        duracao,arquiteto, percentualConformidade,ferroviasEstradas, comprimento, dentroProvincia)
    {
        super(nome,descricao,cliente, orcamento, codigoIdentificacao, dataInicio, 
            duracao,arquiteto, percentualConformidade )
            
            this.ferroviasEstradas = ferroviasEstradas
            this.comprimento = comprimento;
            this.dentroProvincia = dentroProvincia;
    }
    getFerroviasEstradas(){ return this.ferroviasEstradas}
    setFerroviasEstradas(e){ this.ferroviasEstradas = e}

    getComprimento(){ return this.comprimento}
    setComprimento(e){ this.comprimento = e}

    getDentroProvincia(){ return this.dentroProvincia}
    setDentroProvincia(e){ this.dentroProvincia = e}
}
module.exports = Estradas; 