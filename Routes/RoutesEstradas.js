const express = require('express')
const route = express.Router()
const EstradaController = require('../controller/EstradaController')

route.get('/',(req,res)=>{
    res.send("Home Estrada")
})
route.get('/listar',EstradaController.getPredios)
route.get('/projetolongo/',EstradaController.getPredioProjetoLongo)
route.get('/add',EstradaController.add)
module.exports = route