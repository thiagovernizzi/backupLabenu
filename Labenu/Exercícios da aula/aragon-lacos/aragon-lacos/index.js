//Exercício 1

let condicao = true
let soma = 0

while(condicao) {
    //a info que o usuário nos fornece controla quando a condição vai ser falsa.
    const numeroUsuario = Number(prompt('Digite um número de 0 a 10.'))
    //verifica quando a condiçõ é falsa, entra no if e altera o valor da variável condição para false
    if(!numeroUsuario) {
        condicao = false
    } else {
        console.log( 'true')
    }

    soma = soma + numeroUsuario

}

console.log(soma)


// Exercício 2

const numero = [11, 15, 18, 14, 12, 13]

function devolveMaiorNumero(array) {
    let maiorNumero = 0

    for(let i = 0; i < array.length; i++){
        let posicaoAtualArray = array[i]

        if(posicaoAtualArray >= maiorNumero) {
            maiorNumero = posicaoAtualArray
        }
    }

    console.log(`O maior número do array é ${maiorNumero}`)   
}

devolveMaiorNumero(numero)

//Exercício 3

const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]

let frase = ""

for(let palavra of palavras) {
    frase = frase + `${palavra} `
}

console.log(frase)