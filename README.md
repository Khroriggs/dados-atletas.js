# Tutorial dados-atletas.js

Esse arquivo serve de tutorial para utilização da aplicação "dados-atletas.js"

## Conteúdos
- [Tutorial dados-atletas.js](#tutorial-dados-atletasjs)
  - [Conteúdos](#conteúdos)
  - [Visão Geral](#visão-geral)
  - [Explicação dos comandos](#explicação-dos-comandos)
    - [Considerações](#considerações)



## Visão Geral
Esta aplicação tem por finalidade exibir a categoria, IMC, média calculada, nome, idade, peso, altura e notas dos atletas.Essa média é calculada com base nas três notas medianas, desconsiderando a maior e a menor nota.

## Explicação dos comandos

```javascript
 class Atleta {
    constructor(nome, idade, peso, altura,notas){
        this.nome=nome;
        this.idade=idade;
        this.peso=peso;
        this.altura=altura;
        this.notas=notas
    
    }
 }
 ```
Método construtor da classe "Atleta".

 ```javascript
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
 ```
 Função para classificar a categoria do atleta de acordo com a idade.

 ```javascript
calculaIMC(){
      return this.peso/(this.altura*this.altura)
    }
 ```
Função para cálculo de índice de massa corporal (IMC) usando a fórmula do IMC = peso / (altura x altura)

```javascript
calculaMediaValida(){
        let notasOrd=this.notas.sort((a,b)=>{return a-b});
        let notasSlice=notasOrd.slice(1,4);
        let somaNota = 0;
        for (let i = 0; i <notasSlice.length; i++) {
            somaNota+=notasSlice[i];
        }
        return somaNota/notasSlice.length
} 
```
Ordena as notas em ordem crescente.

Retira a maior e a menor nota
e calcula a média válida.

 ```javascript
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
 ```
Funções as quais retornam cada dado pedido (nome, idade, peso, nota, categoria, IMC e média).

 ```javascript
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
 ```
Função que exibe no console.log os dados requisitados.

### Considerações

Este código funciona apenas quando se é fornecido entradas com o seguinte formato:

```javascript
const "nome da constante"=new Atleta("Nome",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);             //(nome, idade, peso, altura,  [5 notas])
  
```
