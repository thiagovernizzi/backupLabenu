let nomeProduto = prompt("Insira o nome do produto:")
// Exercício 1 - variáveis

let precoProduto = Number(prompt("Insira o valor do produto selecionado:"))

precoProduto = precoProduto - 1

console.log(`O preço do(a) ${nomeProduto} com desconto é de ${precoProduto} reais.`)

// Exercício 2

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

console.log(`Primeiro número = ${num1},
Segundo número = ${num2},
Soma = ${num1+num2},
Subtração = ${num1-num2},
Multiplicação = ${num1*num2},
Divisão = ${num1/num2},
Resto da divisão = ${num1%num2}.`)

// Exercício 3

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numAleat = getRandomInt(1,10)

let segNum = Number(prompt("Digite um número entre 1 e 10"))

console.log(`primeiro número: ${numAleat} - segundo número: ${segNum}.
O primeiro número é maior que o segundo? ${numAleat > segNum},
O primeiro número é menor que o segundo? ${numAleat < segNum},
O primeiro número é igual ao segundo? ${numAleat === segNum}.`)
