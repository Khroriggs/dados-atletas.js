
class Atleta {
    constructor(nome, idade, peso, altura,notas){
        this.nome=nome;
        this.idade=idade;
        this.peso=peso;
        this.altura=altura;
        this.notas=notas
    
    }
    calculaCategoria=function(){
        if (this.idade>=9 && this.idade<=11){
            return "Infantil"}
        if (this.idade>=12 && this.idade<=13){
            return "Juvenil"}
        if (this.idade>=14 && this.idade<=15){
            return "Intermediário"}
        if (this.idade>=16 && this.idade<=30){
            return "Adulto"}
        if (this.idade<=8 || this.idade>30){
            return "Sem catergoria"}
    }
    calculaIMC(){
      return this.peso/(this.altura*this.altura)
    }
    calculaMediaValida(){
        let notasOrd=this.notas.sort((a,b)=>{return a-b});
        let notasSlice=notasOrd.slice(1,4);
        let somaNota = 0;
        for (let i = 0; i <notasSlice.length; i++) {
            somaNota+=notasSlice[i];
        }
        return somaNota/notasSlice.length
    // console.log(`Média válida: ${somaNota/notasSlice.length}`)

    }
    obtemNomeAtleta(){
        return this.nome
    }
    obtemIdadeAtleta(){
        return this.idade
    }
    obtemPesoAtleta(){
        return this.peso
    }
    obtemNotasAtleta(){
        return this.nota
    }
    obtemCategoria(){
        return atleta.calculaCategoria()
    }
    obtemIMC(){
        return atleta.calculaIMC()
    }
    obtemMediaValida(){
        return atleta.calculaMediaValida()
    }
    exibir(){
        console.log(`Nome: ${this.nome}
Idade: ${this.idade} 
Peso: ${this.peso} 
Altura: ${this.altura} 
Notas: ${this.notas} 
Categoria: ${this.calculaCategoria()} 
IMC: ${this.calculaIMC()} 
Média válida: ${this.calculaMediaValida()}`)

    }
}  
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    
atleta.exibir()

