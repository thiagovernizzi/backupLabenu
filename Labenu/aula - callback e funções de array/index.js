// const verificaPar = (numero,imprimir) => {
//     if(numero % 2 === 0) {
//         const resultado = numero/2
//         imprimir(resultado)
//     }
// }

// const imprimeMensagem = (valor) => {
//     console.log('O resultado da sua conta é ' + valor)
// }

// verificaPar(2, imprimeMensagem)

// Exercício 2

// const verificaPar = (numero,imprimir) => {
//     if(numero % 2 === 0) {
//         const resultado = numero/2
//         imprimir(resultado)
//     }
// }

// verificaPar(2, (valor) => {
//     console.log('O resultado da sua conta é ', valor
// })

// Exercício 3

// const verificaImpar = (numero,imprimeMensagem) => {
//     if(numero % 2 !== 0) {
//         const resultado = numero
//         imprimir(resultado)
//     }
// }

// verificaImpar(3, (valor) => {
//         console.log('O resultado é ímpar.')
//     })

// Exemplo do Yuzo

const verificaImpar = (numero,imprimeMensagem) => {
    if(numero % 2 !== 0) {
        imprimeMensagem("Sim, é ímpar.")
    }
}

verificaImpar(7, (texto) => {
    console.log(texto)
})

// Exemplo Map Pokemon

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "grama" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água "},
]

const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
    return pokemon.nome
})

console.log(nomeDosPokemons)

// Exercicio

const numeros = [5, 16, 20, 13, 12]

const numerosVarridos = numeros.map((numero, indice) => {
    return `O elemento na posição ${indice} é ${numero}`
})

console.log(numeros)
console.log(numerosVarridos)


// Exemplo filter

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "grama" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água "},
// ]

// const tipoDosPokemons = pokemons.filter((pokemon, indice, array) => {
//     return pokemon.tipo === "grama"
// })

// console.log(tipoDosPokemons)


// Exercício 

// const numeros = [10, 25, 5, 12, 13, 100]

// const numerosMaioresQueDez = numeros.filter((numero) => {
//     return numero > 10
// })

// console.log(numeros)
// console.log(numerosMaioresQueDez)

// const numerosPares = numeros.filter ((numero) => {
//     return numero % 2 === 0
// })

console.log(numeros)
console.log(numerosPares)


// Exercício

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

const produtoLimpeza = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
})

// console.log(produtoLimpeza)

const nomeProdutosLimpeza = produtoLimpeza.map((produto) => {
    produto.nome
})

console.log(nomeProdutosLimpeza)
