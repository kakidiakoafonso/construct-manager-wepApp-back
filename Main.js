const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const RoutePredio = require('./Routes/RoutesPredio')
const RouteEstradas = require('./Routes/RoutesEstradas')



app.use('/predio',RoutePredio)
app.use('/estrada',RouteEstradas)
app.post('/post',(req,res)=>{
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})