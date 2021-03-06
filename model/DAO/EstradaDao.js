const conexao = require('../../config/getConnection')

class EstradaDao {
    InsertEstrada(Estrada) 
    {
        console.log(Estrada.getDaInicio());
        conexao.execute("INSERT INTO `estrada`(`nome`, `descricao`, `orcamento`, `codigoIdentificacao`, `dataInicio`, `duracao`, `percentualConformidade`, `ferroviasEstradas`, `comprimento`, `dentroProvincia`,`clienteNome`, `clienteSexo`, `clientePrivado`, `clienteProvincia`, `clienteMunicipio`, `clienteRua`, `clienteNumero`, `arquitetoNome`, `arquitetoSexo`, `arquitetoAnoExperiencia`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
       // ['Nome','Descricao','Orcamento','CodigodeIdentificacao','Data de Inicio','Duracao','Percentual','ferroviasEstradas','comprimento','dentroProvincia','clienteNome', 'clienteSexo', 'clientePrivado', 'clienteProvincia', 'clienteMunicipio', 'clienteRua', 'clienteNumero', 'arquitetoNome', 'arquitetoSexo', 'arquitetoAnoExperiencia'],
       [Estrada.getNome(),Estrada.getDescricao(),Estrada.getOrcamento(),Estrada.getCodigoIdentificacao(),Estrada.getDaInicio(),Estrada.getDuracao(),Estrada.getPercentualConformidade(),
        Estrada.getFerroviasEstradas(),Estrada.getComprimento(),Estrada.getDentroProvincia(),Estrada.getCliente().getNome(),
        Estrada.getCliente().getSexo(),Estrada.getCliente().getPrivado(), Estrada.getCliente().getEndereco().getProvincia(), 
        Estrada.getCliente().getEndereco().getMunicipio(),Estrada.getCliente().getEndereco().getRua(),
        Estrada.getCliente().getEndereco().getNumero(),Estrada.getArquiteto().getNome(),Estrada.getArquiteto().getSexo(),Estrada.getArquiteto().getAnoExperiencia() ],
       function(erro,resultado,campos) 
        {
            if(erro) 
                {console.log("Erro")}    
            if(resultado) 
                {console.log("Resultado")}  
            if(campos) 
                {console.log("Campos")}
        }
        )
    }
    updateEstrada(Estrada,id)
    {
        //console.log(Estrada.getNome());
        conexao.execute('UPDATE `estrada` SET `nome`=?,`descricao`=?,`orcamento`=?,`codigoIdentificacao`=?,`dataInicio`=?,`duracao`=?,`percentualConformidade`=?,`ferroviasEstradas`=?,`comprimento`=?,`dentroProvincia`=?,`clienteNome`=?,`clienteSexo`=?,`clientePrivado`=?,`clienteProvincia`=?,`clienteMunicipio`=?,`clienteRua`=?,`clienteNumero`=?,`arquitetoNome`=?,`arquitetoSexo`=?,`arquitetoAnoExperiencia`=? WHERE `idEstrada`=?',
        //[`nome`,`descricao`,`orcamento`,`codigoIdentificacao`,`dataInicio`,`duracao`,`percentualConformidade`,`ferroviasEstradas`,`comprimento`,true,`clienteNome`,`clienteSexo`,`clientePrivado`,'Cliente  Provicia',`clienteMunicipio`,`clienteRua`,`clienteNumero`,`arquitetoNome`,`arquitetoSexo`,`arquitetoAnoExperiencia`, 2],
        [Estrada.getNome(),Estrada.getDescricao(),Estrada.getOrcamento(),Estrada.getCodigoIdentificacao(),Estrada.getDaInicio(),Estrada.getDuracao(),Estrada.getPercentualConformidade(),
            Estrada.getFerroviasEstradas(),Estrada.getComprimento(),Estrada.getDentroProvincia(),Estrada.getCliente().getNome(),
            Estrada.getCliente().getSexo(),Estrada.getCliente().getPrivado(), Estrada.getCliente().getEndereco().getProvincia(), 
            Estrada.getCliente().getEndereco().getMunicipio(),Estrada.getCliente().getEndereco().getRua(),
            Estrada.getCliente().getEndereco().getNumero(),Estrada.getArquiteto().getNome(),Estrada.getArquiteto().getSexo(),Estrada.getArquiteto().getAnoExperiencia(), id ],
        function(erro,resultado){
            if(!erro){
                console.log("Entrou")
            }
        })
    }
    getEstradas ()
    {
        conexao.query('SELECT * FROM `estrada`',
        function(erro,resultados){
            if(erro){
                console.log(erro);
            }
            if(resultados){
                console.log(resultados)
            }

        })
    }
    deleteEstrada(id){
        conexao.execute('DELETE FROM `estrada` WHERE idEstrada = ?',
        [id],
        function(erro,resultados){
            if(!erro){
                console.log("Apagado");
            }

        })
    }
    updatePercentual(id,codigoIdentificacao,percentualConformidade)
    {
        
        conexao.execute('UPDATE `estrada` SET `percentualConformidade` = ? WHERE `estrada`.`idEstrada` = ? and `estrada`.`codigoIdentificacao` = ?',
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
    getMedia(res,data)
    {
        
        conexao.execute('select avg(comprimento) from estrada where dataInicio >?',
            [data], function(erro,resultados) 
            {
               
                if(resultados){
                    console.log(resultados)
                    res.send(resultados)
                }
                if(erro)
                {
                    console.log(erro);
                    res.send(erro)
                }
    
            }
            )
    }
}

module.exports = EstradaDao




