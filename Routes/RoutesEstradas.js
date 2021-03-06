const express = require('express')
const route = express.Router()
const EstradaController = require('../controller/EstradaController')

route.get('/',(req,res)=>{
    res.send(req.body)
})
route.get('/listar',EstradaController.get)
route.post('/listar/media',EstradaController.getMedia)
route.get('/projetolongo',EstradaController.getPredioProjetoLongo)
route.post('/add',EstradaController.add)
route.post('/update',EstradaController.update)
route.post('/updatepercentual',EstradaController.updatepercentual)
route.post('/delete',EstradaController.delete)
module.exports = route