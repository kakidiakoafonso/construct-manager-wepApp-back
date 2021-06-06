const express = require('express')
const route = express.Router()
const EstradaController = require('../controller/EstradaController')

route.get('/',(req,res)=>{
    res.send(req.body)
})
route.get('/listar',EstradaController.get)
route.get('/projetolongo',EstradaController.getPredioProjetoLongo)
route.post('/add',EstradaController.add)
route.put('/update',EstradaController.update)
route.delete('/delete',EstradaController.delete)
module.exports = route