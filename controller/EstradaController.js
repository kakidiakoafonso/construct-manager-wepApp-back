const conexao = require('../config/getConnection')
const Estrada = require('../model/Objects/Estrada')
const Cliente = require('../model/Objects/Cliente')
const Arquiteto = require('../model/Objects/Arquiteto')
const Dao = require('../model/DAO/EstradaDao')
const dao = new Dao()
const Endereco = require('../model/Objects/Endereco')


exports.getPredios =  (req,res) =>
{
    conexao.query('SELECT * FROM `estrada`',
    function(erro,resultados) 
    {
       
        if(resultados){
            res.send(resultados)
        }
        if(erro)
        {
            res.send(erro)
        }

    })
}
exports.getPredioProjetoLongo =  (req,res) =>
{
    conexao.query('SELECT clienteNome,clienteSexo,clientePrivado,clienteProvincia,clienteProvincia,'+
        'clienteMunicipio,clienteRua,clienteNumero,'+
        'MAX(duracao) as duracaoMaxima FROM `estrada`',
    function(erro,resultados) 
    {
       
        if(resultados){
            res.send(resultados)
        }
        if(erro)
        {
            res.send(erro)
        }

    })
}
exports.add = (req,res) => 
{   
    try {
        const endereco = new Endereco("Luanda","Rangel","KM 1500","4")
        const cliente = new Cliente("Maria Jose","Femenino",endereco,true)
        const arquiteto = new Arquiteto("Eliseu Salomao","Masculino",10)
        const estrada = new Estrada("Nome da Estrada","Descricao da obra",cliente,40000,"4ommm9","20/2/2011",4,
        arquiteto,"11%","Estrada","200KM",true)
        dao.InsertEstrada(estrada)
        res.send("Cadastrado")
        
    } catch (error) {
        res.send(error)
    }
    
}