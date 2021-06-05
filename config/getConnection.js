const mysql = require('mysql2');
 
// Cria conexao com a base de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'scpce',
});

module.exports = connection;