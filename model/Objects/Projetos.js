class Projetos
{
    constructor(nome,descricao,cliente, orcamento, codigoIdentificacao, dataInicio, 
        duracao,arquiteto, percentualConformidade )
    {
        this.nome= nome;
        this.descricao = descricao;
        this.orcamento = orcamento;
        this.cliente = cliente;
        this.codigoIdentificacao = codigoIdentificacao;
        this.dataInicio = dataInicio;
        this.duracao =duracao;
        this.arquiteto = arquiteto;
        this.percentualConformidade = percentualConformidade;
    }
    getNome() {return this.nome}
    setNome(nome) {this.nome = nome}

    getDescricao() {return this.descricao}
    setDescricao(descricao) {this.descricao = descricao}

    getOrcamento() {return this.orcamento}
    setOrcamento(orcamento) {this.orcamento = orcamento}

    getCliente() {return this.cliente}
    setCliente(cliente) {this.cliente = cliente}

    getCodigoIdentificacao() {return this.codigoIdentificacao}
    setodigoIdentificacao(codigoIdentificacao) {this.codigoIdentificacao = codigoIdentificacao}

    getDaInicio() {return this.dataInicio}
    setDataInicio(datainicio) {this.dataInicio = datainicio}

    getDuracao() {return this.duracao}
    setDuracao(duracao) {this.duracao = duracao}

    getArquiteto() {return this.arquiteto}
    setArquiteto(arquiteto) {this.arquiteto = arquiteto}

    getPercentualConformidade() {return this.percentualConformidade}
    setPercentualConformidade(percentualConformidade) {this.percentualConformidade = percentualConformidade}
    
}

module.exports = Projetos;