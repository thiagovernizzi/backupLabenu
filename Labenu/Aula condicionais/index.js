//Exercício 1 e 2
/* function checaIgualdadeValores(num1,num2){
    if(num1 === num2){
        return "Os números são iguais."
    } else {
        return "Os números são diferentes"
    }
}

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

const resultado = checaIgualdadeValores(primeiroNumero,segundoNumero)
console.log(resultado) */

// Encadeamento de condições (uma condicional dentro da outra)


// Exercício 3

/* function checaIgualdadeValores(num1,num2){
    if(num1 > num2){
        return "Num1 é maior Num2"
    } else if (num1 < num2) {
        return "Num1 é menor Num2"
    } else {
        return "Num1 é igual a Num2"
    }
}

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

const resultado = checaIgualdadeValores(primeiroNumero,segundoNumero)
console.log(resultado) */

// Exercício 4
// Programa recebe o Pokémon e imprime o seu tipo
// Bulbasauro (Planta e Veneno)
// Charmander (Fogo)
// Squirtle (Água)

// function checaTipoPokemon(pokemonInicial){
//     switch (pokemonInicial) {
//         case "Bulbasauro":
//             console.log("Planta e Veneno")
//             break
//         case "Charmander":
//             console.log("Fogo")
//             break
//         case "Squirtle":
//             console.log("Água")
//             break
//         default:
//         console.log("Nenhum Pokémon foi encontrado")
//     }
// }

// const pokemonEscolhido = prompt("Escolha o Pokémon inicial: Bulbasauro, Charmander ou Squirtle")
// checaTipoPokemon(pokemonEscolhido)

// function checaTipoPokemon(pokemonInicial){
//     switch (pokemonInicial) {
//         case "Bulbasauro":
//             return "Planta e Veneno"
//             break
//         case "Charmander":
//             return "Fogo"
//             break
//         case "Squirtle":
//             return "Água"
//             break
//         default:
//         return "Nenhum Pokémon foi encontrado"
//     }
// }

// const pokemonEscolhido = prompt("Escolha o Pokémon inicial: Bulbasauro, Charmander ou Squirtle")
// console.log(checaTipoPokemon(pokemonEscolhido))

// Exercício 5

function verificaRequisitosMatricula(isEnsinoMedioCompleto,isMaiorDeIdade,isCursandoFaculdade){
    if (isEnsinoMedioCompleto && isMaiorDeIdade && !isCursandoFaculdade){
        return "Você pode se matricular."
    } else {
        return "Você pode se matricular."
    }
}

let resposta1 = prompt("Você já concluiu o Ensino Médio? (s/n)")
let resposta2 = prompt("Você possui 18 anos ou mais? (s/n)")
let resposta3 = prompt("Você está matriculado em outra faculdade? (s/n)")

if (resposta1 === "s"){
    resposta1 = true
} else {
    resposta1 = false
}

if (resposta2 === "s"){
    resposta2 = true
} else {
    resposta2 = false
}

if (resposta3 === "s"){
    resposta3 = true
} else {
    resposta3 = false
}

const resultado = verificaRequisitosMatricula(resposta1,resposta2,resposta3)
console.log(resultado)