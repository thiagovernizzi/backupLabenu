/* Exercício 1

function imprimirOlaMundo(){
    console.log("Olá, Mundo!")
}

imprimirOlaMundo()

// Exercício 2

function imprimeNome(nome){
    console.log(`Olá, ${nome}`)
}

imprimeNome("Camila")
imprimeNome("Thiago")
imprimeNome("Lorenzo")
imprimeNome(prompt("Digite seu nome"))
*/

// Escopo

/* const a = 5

function imprimeVariavel() {
    const b = 10
    console.log('Variável do escopo Global', a)
    console.log('Variável do escopo Local', b)
}

imprimeVariavel('Variável do escopo Global', a)
imprimeVariavel('Variável do escopo Local', b)
*/

// Exercício 3

function imprimeSomaComRetorno(num1,num2) {
    const soma = num1 + num1
   
    return soma
    // abaixo do return nada mais é executado
}

console.log(imprimeSomaComRetorno(4,4))

// Exercício 4

// fazer depois


// Exercício 5

const imprimeSomaComRetorno = function(num1,num2) {
    const soma = num1 + num1
        return soma
    // abaixo do return nada mais é executado
}

console.log(imprimeSomaComRetorno(4,4))

// Arrow function

