//Primeira aula de JavaScript - variáveis

// console.log - imprime a mensagem no terminal do navegador

console.log("Olá, mundo!")

/*

Prompt recebe os dados do usuário

*/

// const idade = prompt ("Qual é sua idade?")

// console.log(idade)

// declaração de constantes

/*
const minhaConstante = "123"

minhaConstante = 123
*/

// declaração de variável

// let minhaVariavel = 1
// minhaVariavel = 2

// imprimindo frase no terminal do navegador
// console.log("Você tem: ", idade, "anos.")

// Exercício 1: crie uma variável que atribua seu primeiro nome
const primeiroNome = "Thiago"

// Exercício 2: crie uma variável que atribua seu sobrenome
const sobrenome = "Vernizzi"

// Exercício 3: crie uma variável que atribua sua idade
let idade = 37

// Exercício 4: crie uma variável que diga se você é ou não estudante
// const ocupacao = prompt ("Qual a sua ocupação na Labenu")

// Exercício 5: imprima seu nome, sobrenome, idade e status de estudante
// console.log("Seu nome é: ", primeiroNome, sobrenome,", sua idade é: ", idade, "anos e você é:", ocupacao)

// Utilizando typeof
let ocupacao
let cargo = null
console.log(typeof ocupacao)
console.log(typeof cargo)
console.log(cargo)

// Exercício final 1

const nomeUsuario = prompt("Qual é o seu nome?")
const idadeUsuario = prompt("Qual é sua idade?")
const isMaiorDeIdade = true
console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)
console.log(typeof isMaiorDeIdade)

// Conversão de número para string ou Number para toString()
const numeroVinteETres = 23
let textoVinteETres

textoVinteETres = numeroVinteETres.toString()
console.log("Tipo da variável textoVinteETres", typeof textoVinteETres)

// Conversão de texto para número
const textoTrintaEQuatro = 34
let numeroTrintaEQuatro

numeroTrintaEQuatro = Number(numeroTrintaEQuatro)
console.log("Tipo da variável numeroTrintaEQuatro", numeroTrintaEQuatro)
