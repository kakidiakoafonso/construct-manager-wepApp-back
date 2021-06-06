const conexao = require('../config/getConnection')

//Objetos
const Estrada = require('../model/Objects/Estrada')
const Cliente = require('../model/Objects/Cliente')
const Endereco = require('../model/Objects/Endereco')
const Arquiteto = require('../model/Objects/Arquiteto')

//DATA ACESS OBJECT
const EstradaDao = require('../model/DAO/EstradaDao')
const dao = new EstradaDao()

exports.get =  (req,res) =>
{
    conexao.query('SELECT * FROM `estrada`',
    function(erro,resultados) 
    {
       
        if(resultados){
            //res.send("Predios listados")
            res.send(resultados)
        }
        if(erro)
        {
            res.send("Erro na listagem dos preddios")
        }

    })
}
exports.getPredioProjetoLongo =  (req,res) =>
{
    conexao.query('SELECT clienteNome,clienteSexo,clientePrivado,clienteProvincia,clienteProvincia,'+
        'clienteMunicipio,clienteRua,clienteNumero,'+
        'MAX(duracao) as duracaoMaxima FROM `predios`',
    function(erro,resultados) 
    {
       
        if(resultados){
            res.send(resultados)
        }
        if(erro)
        {
            res.send("Erro na listagem do projeto longo")
        }

    })
}
exports.add =  (req,res) =>
{
    const enderecoCliente = new Endereco(req.body.clienteProvincia,req.body.clienteMunicipio,req.body.clienteRua, req.body.clienteNumero)
    const arquiteto = new Arquiteto(req.body.arquitetoNome,req.body.arquitetoSexo,req.body.arquitetoAnoExperiencia)
    const cliente = new Cliente(req.body.clienteNome, req.body.clienteSexo, enderecoCliente, req.body.clientePrivado)
    const estrada = new Estrada(req.body.nome,req.body.descricao,cliente, req.body.orcamento , req.body.codigoIdentificacao ,req.body.dataInicio ,req.body.duracao,
        arquiteto, req.body.percentualConformidade , req.body.ferroviaEstrada ,req.body.comprimento,req.body.dentroProvincia)
        try {
            dao.InsertEstrada(estrada)
            res.send("OK introduzido")
        } catch (error) {
            res.send("Nao introduzido")
            console.log(error);
        }
    
}
exports.update =  (req,res) =>
{
    const id = req.body.id
    const enderecoCliente = new Endereco(req.body.clienteProvincia,req.body.clienteMunicipio,req.body.clienteRua, req.body.clienteNumero)
    const arquiteto = new Arquiteto(req.body.arquitetoNome,req.body.arquitetoSexo,req.body.arquitetoAnoExperiencia)
    const cliente = new Cliente(req.body.clienteNome, req.body.clienteSexo, enderecoCliente, req.body.clientePrivado)
    const estrada = new Estrada(req.body.nome,req.body.descricao,cliente, req.body.orcamento , req.body.codigoIdentificacao ,req.body.dataInicio ,req.body.duracao,
        arquiteto, req.body.percentualConformidade , req.body.ferroviaEstrada ,req.body.comprimento,req.body.dentroProvincia)
        try {
            dao.updateEstrada(estrada,id)
            res.send("OK, estrada atualizado")
        } catch (error) {
            res.send("Estrada nao atualizado")
            console.log(error);
        }
    
}
exports.delete =  (req,res) =>
{
        try {
            dao.deleteEstrada(req.body.id)
            res.send("OK, Estrada apagada")
        } catch (error) {
            res.send("Estrada nao apagada")
            console.log(error);
        }
    
}