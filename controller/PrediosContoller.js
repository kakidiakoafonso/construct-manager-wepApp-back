const conexao = require('../config/getConnection')

//Objetos
const Predio = require('../model/Objects/Predio')
const Cliente = require('../model/Objects/Cliente')
const Endereco = require('../model/Objects/Endereco')
const Arquiteto = require('../model/Objects/Arquiteto')

//DATA ACESS OBJECT
const PredioDao = require('../model/DAO/PredioDao')
const dao = new PredioDao()

exports.getPredios =  (req,res) =>
{
    conexao.query('SELECT * FROM `predios`',
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
exports.addPredios =  (req,res) =>
{
    const enderecoPredio = new Endereco(req.body.provincia,req.body.municipio,req.body.rua,req.body.numero)
    const enderecoCliente = new Endereco(req.body.clienteProvincia,req.body.clienteMunicipio,req.body.clienteRua, req.body.clienteNumero)
    const arquiteto = new Arquiteto(req.body.arquitetoNome,req.body.arquitetoSexo,req.body.arquitetoAnoExperiencia)
    const cliente = new Cliente(req.body.clienteNome, req.body.clienteSexo, enderecoCliente, req.body.clientePrivado)
    const predio = new Predio(req.body.nome,req.body.descricao,cliente, req.body.orcamento , req.body.codigoIdentificacao ,req.body.dataInicio ,req.body.duracao,
        arquiteto, req.body.percentualConformidade , req.body.alturaMaxima ,enderecoPredio ,req.body.tipo)
        try 
        {
            dao.InsertPredio(predio,res)
            //res.send("OK introduzido")
        } catch (error) {
            //res.send("Nao introduzido")
            res.send(error);
        }
    
}
exports.updatePredios =  (req,res) =>
{
    const id = req.body.id
    const enderecoPredio = new Endereco(req.body.provincia,req.body.municipio,req.body.rua,req.body.numero)
    console.log(enderecoPredio)
    const enderecoCliente = new Endereco(req.body.clienteProvincia,req.body.clienteMunicipio,req.body.clienteRua, req.body.clienteNumero)
    const arquiteto = new Arquiteto(req.body.arquitetoNome,req.body.arquitetoSexo,req.body.arquitetoAnoExperiencia)
    const cliente = new Cliente(req.body.clienteNome, req.body.clienteSexo, enderecoCliente, req.body.clientePrivado)
    const predio = new Predio(req.body.nome,req.body.descricao,cliente, req.body.orcamento , req.body.codigoIdentificacao ,req.body.dataInicio ,req.body.duracao,
        arquiteto, req.body.percentualConformidade , req.body.alturaMaxima ,enderecoPredio ,req.body.tipo)
        try {
            dao.updatePredio(predio,id)
            res.send("OK, predio atualizado")
        } catch (error) {
            res.send("Predio nao atualizado")
            console.log(error);
        }
    
}
exports.deletePredios =  (req,res) =>
{
        try {
            dao.deletePredio(req.body.id)
            res.send("OK, predio apagado")
        } catch (error) {
            res.send("Predio nao apagado")
            console.log(error);
        }
    
}