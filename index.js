const Estrada = require('./model/Objects/Estrada')
const Predio = require('./model/Objects/Predio')
const Arquiteto = require('./model/Objects/Arquiteto')
const Cliente = require('./model/Objects/Cliente')
const Endereco = require('./model/Objects/Endereco')
const PredioDao = require('./model/DAO/PredioDao')
// const daoModel = require('./model/DAO/DAO')

const endereco = new Endereco("Uige","Candombe","Nzawa",11)
const cliente = new Cliente("Florencia Macaia","Femenino",endereco,true)
const arquiteto = new Arquiteto("Vava Pedro","Masculino",3)
// const estrada = new Estrada("Estrada Luanda Benguela","Estrada que vai ligar Luanda Benguela",
// cliente,"Orcamento","Codigo de Identificacao","Data inicio","Duracao",arquiteto,"Porcentual","Estrada","1 KM",true)
// const DAO = new daoModel()
// DAO.InsertEstrada(estrada)
// DAO.updateEstrada(estrada)
//console.log(estrada.getCliente());


//Predios
const prediodao = new PredioDao()
const predio = new Predio('nome1','descricao1',cliente, 'orcamento1', 'codigoIdentificacao1', 'dataInicio1', 
    'duracao1',arquiteto, 'percentualConformidade1', 'alturaMaxima1', endereco, 'tipo1')
const pre = new PredioDao()
//pre.updatePredio(predio);    
pre.getPredios()