const conexao = require('../../config/getConnection')

class PredioDao {
    InsertPredio(Predio) 
    {
        console.log(Predio.getArquiteto());
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
                {console.log("Erro" + erro)}    
            if(resultado) 
                {console.log("Resultado")}  
            if(campos) 
                {console.log("Campos")}
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
        conexao.query('SELECT * FROM `predios`',
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
    
}

module.exports = PredioDao;




