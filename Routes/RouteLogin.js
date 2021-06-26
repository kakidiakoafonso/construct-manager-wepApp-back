const express = require('express')
const route = express.Router()
const conexao = require("../config/getConnection")


route.post('/',(req,res)=>
{
    conexao.execute("SELECT * FROM `users` WHERE user= ? and pass = ? ",
    [req.body.user,req.body.pass],
    function(erro,resultado,campos)  
    {
        if(erro)
            res.send(erro)
        if(resultado)
            res.send(resultado)
        if(campos)
            console.log(campos)
    })
})
module.exports = route