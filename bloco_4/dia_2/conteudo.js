//conteudo do video 
let num = [12,2,7]
console.log(num.sort())


//criando um array
let frutas = ["maçã", "banana", "pera", "melão", "abacaxi"]
console.log(frutas)//para mostrar apenas o array eu só escreva o nome da let 

console.log(frutas.length)//para mostrar a quantidade de elementos dentro do array usamos o comando length

console.log(frutas[1])// para acessar o indice dos elementos do array é só digitar o numero do indice dentro do [] após o nome da let, obs: é muito importante que vc se lembre que todo array começa com o indice 0

frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
}); //para mostrar o item acompanhado do indice do array

frutas.push("abacate", "melancia")//para adicionar mais elementos dentro do seu array use o comando push
console.log(frutas)

frutas.pop()//remove apenas o ultimo elemento adicionado ao array
console.log(frutas)

frutas.shift()//remove apenas o primeiro elemento do array
console.log(frutas)

frutas.unshift("morango")//adiciona elementos ao começo do do array
console.log(frutas)

let procura = frutas.indexOf("melão")// com o elemento indexOf vc pode pesquisar o nome do elemento e ele te retorna o indice que aquele elemento ocupa
console.log(procura)

frutas.splice(4)// exclui tudo do array que estiver após a posição digitada dentro do ()
console.log(frutas)

frutas.splice(2, 4)//para excluir mais de um elelemento do array
console.log(frutas)

frutas.unshift("morango", "pera", "abacate")//para copiar um array
frutas.slice()
console.log(frutas)

let cars = ["Saab", "Volvo", "BMW"];
let Volvo= cars[1];
console.log(Volvo)