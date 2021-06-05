const Pessoa = require('./Pessoa')

class Arquiteto extends Pessoa
{
    constructor(nome,sexo,anoExperiencia)
    {
        super(nome,sexo)
        this.anoExperiencia = anoExperiencia;
    }
    getAnoExperiencia() { return this.anoExperiencia}
    setAnoExperiencia(anoExperiencia) { this.anoExperiencia = anoExperiencia}
}
module.exports = Arquiteto;