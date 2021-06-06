const express = require('express')
const route = express.Router()
const PredioController = require('../controller/PrediosContoller')

route.get('/',(req,res)=>{
    res.send(req.body)
})
route.get('/listar',PredioController.getPredios)
route.get('/projetolongo/',PredioController.getPredioProjetoLongo)
route.post('/add',PredioController.addPredios)
route.put('/update',PredioController.updatePredios)
route.delete('/delete',PredioController.deletePredios)
module.exports = route