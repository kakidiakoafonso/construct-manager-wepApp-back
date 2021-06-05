const express = require('express')
const app = express()
const port = 3000

//Imports
const dao = require('./model/DAO/DAO')

app.get('/', (req, res) => 
{
  res.send(dao.retornaNome("Vanio"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})