const conexao = require('../../config/getConnection')

class PredioDao {
    InsertPredio(Predio,res) 
    {
        console.log(Predio)
        conexao.execute('INSERT INTO `predios`(`nome`, `descricao`, `orcamento`, `codigoIdentificacao`, `dataInicio`,'+ 
        '`duracao`, `percentualConformidade`, `tipo`, `alturaMaxima`, `provincia`, `municipio`, `rua`, `numero`, '+
        '`clienteNome`, `clienteSexo`, `clientePrivado`, `clienteProvincia`, `clienteMunicipio`, `clienteRua`, '+
        '`clienteNumero`, `arquitetoNome`, `arquitetoSexo`, `arquitetoAnoExperiencia`) '+
        'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [Predio.getNome(), Predio.getDescricao(), Predio.getOrcamento(), Predio.getCodigoIdentificacao(),Predio.getDaInicio(),
        Predio.getDuracao(),Predio.getPercentualConformidade(), Predio.getTipo(),Predio.getAlturaMaxima(), 
        Predio.getEndereco().getProvincia(), Predio.getEndereco().getMunicipio(),Predio.getEndereco().getRua(),
        Predio.getEndereco().getNumero(), Predio.getCliente().getNome(),Predio.getCliente().getSexo(),
        Predio.getCliente().getPrivado(),Predio.getCliente().getEndereco().getProvincia(), 
        Predio.getCliente().getEndereco().getMunicipio(),Predio.getCliente().getEndereco().getRua(),
        Predio.getCliente().getEndereco().getNumero(),Predio.getArquiteto().getNome(),Predio.getArquiteto().getSexo(),Predio.getArquiteto().getAnoExperiencia()],   
     function(erro,resultado,campos) 
        {
            if(erro) 
                {
                    console.log("Erro" + erro)
                    res.send("Dados do predio nao introduzido")
                }    
            if(resultado) 
                {
                   
                    res.send("Dados do predio introduzido")
                }  
            if(campos) 
                {
                    console.log("Campos")
                    res.send("Campos")
                }
        }
        )
    }
    updatePredio(Predio,id)
    {
        //console.log(Predio.getNome());
        conexao.execute('UPDATE `predios` SET `nome`=?,`descricao`=?,`orcamento`=?,`codigoIdentificacao`=?,`dataInicio`=?,`duracao`=?,`percentualConformidade`=?,`tipo`=?,`alturaMaxima`=?,`provincia`=?,`municipio`=?,`rua`=?,`numero`=?,`clienteNome`=?,`clienteSexo`=?,`clientePrivado`=?,`clienteProvincia`=?,`clienteMunicipio`=?,`clienteRua`=?,`clienteNumero`=?,`arquitetoNome`=?,`arquitetoSexo`=?,`arquitetoAnoExperiencia`=? WHERE `idPredio` = ?',
        [Predio.getNome(), Predio.getDescricao(), Predio.getOrcamento(), Predio.getCodigoIdentificacao(),Predio.getDaInicio(),
            Predio.getDuracao(),Predio.getPercentualConformidade(), Predio.getTipo(),Predio.getAlturaMaxima(), 
            Predio.getEndereco().getProvincia(), Predio.getEndereco().getMunicipio(),Predio.getEndereco().getRua(),
            Predio.getEndereco().getNumero(), Predio.getCliente().getNome(),Predio.getCliente().getSexo(),
            Predio.getCliente().getPrivado(),Predio.getCliente().getEndereco().getProvincia(), 
            Predio.getCliente().getEndereco().getMunicipio(),Predio.getCliente().getEndereco().getRua(),
            Predio.getCliente().getEndereco().getNumero(),Predio.getArquiteto().getNome(),Predio.getArquiteto().getSexo(),Predio.getArquiteto().getAnoExperiencia(),id],
        function(erro,resultado){
            if(!erro){
                console.log("Entrou")
            }
        })
    }
    getPredios ()
    {
        conexao.query('SELECT * FROM `predios` order BY idPredio DESC',
        function(erro,resultados) 
        {
           
            if(resultados){
                console.log(resultados)
            }
            if(erro)
            {
                console.log(erro);
            }

        })
    }
      deletePredio(id)
      {
        conexao.execute('DELETE FROM `predios` WHERE idPredio = ?',
        [id],
        function(erro,resultados){
            if(!erro){
                console.log("Apagado");
            }

        })
    }
      dadosClienteProjetoLongo(res,municipio)
      {
        conexao.execute('SELECT  distinct  municipio, clienteNome, clienteSexo, clientePrivado, clienteProvincia, clienteMunicipio, clienteRua, clienteNumero, max(duracao) as  projetoMaximo from `predios` where clienteMunicipio = ? ',
        [municipio],
        function(erro,resultados){
            if(resultados){
                console.log("Listagem dos dados");
                res.send(resultados)
            }
            if(erro){
                console.log("Erro na listagem: "+erro);
                res.send("Erro na listagem: "+erro)
            }

        })
    }
    updatePercentual(id,codigoIdentificacao,percentualConformidade)
    {
        
        conexao.execute('UPDATE `predios` SET `percentualConformidade` = ? WHERE `predios`.`idPredio` = ? and `predios`.`codigoIdentificacao` = ?',
            [percentualConformidade,id,codigoIdentificacao], function(erro,resultados) 
            {
               
                if(resultados){
                    console.log(resultados)
                }
                if(erro)
                {
                    console.log(erro);
                }
    
            }
            )
    }
    
}

module.exports = PredioDao;




