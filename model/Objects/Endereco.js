class Endereco
{
    constructor(provincia, municipio, rua, numero)
    {
        this.provincia = provincia;
        this.municipio = municipio;
        this.rua = rua
        this.numero = numero
    }
    getProvincia(){ return this.provincia}
    setProvincia(e){ this.provincia = this.provincia }

    getMunicipio(){ return this.municipio}
    setMunicipio(e){ this.municipio = e }

    getRua(){ return this.rua}
    setRua(e){ this.rua = e }

    getNumero(){ return this.numero}
    setNumero(e){ this.numero = e}
}

module.exports = Endereco;