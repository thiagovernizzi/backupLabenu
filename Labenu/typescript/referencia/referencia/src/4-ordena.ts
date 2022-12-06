// Podemos ordenar uma lista utilizando o sort(). Ele altera a lista original, então precisamos criar uma cópia com o spread operator antes da ordenação.
// No código abaixo temos um exemplo genérico de função que recebe uma lista de pessoas e retorna uma nova lista de pessoas em ordem crescente baseada no valor da idade de cada uma.
// O número 4 em CONTA, Pessoa, pessoas e filtraLista é para burlar uma limitação do typescript de não poder repetir o mesmo nome mesmo em arquivos diferentes. Esse é o arquivo 4 então deixei 4 nos nomes para diferenciar dos outros arquivos.

enum CONTA4 {
    NORMAL = "normal",
    ADMIN = "admin"
}

type Pessoa4 = {
    id: number,
    nome: string,
    conta: CONTA4,
    idade: number
}

const pessoas4: Pessoa4[] = [
    {
        id: 1,
        nome: "astrodev",
        conta: CONTA4.ADMIN,
        idade: 45 
    },
    {
        id: 2,
        nome: "bananinha",
        conta: CONTA4.NORMAL,
        idade: 22 
    },
    {
        id: 3,
        nome: "fulano",
        conta: CONTA4.NORMAL,
        idade: 35 
    },
    {
        id: 4,
        nome: "ciclana",
        conta: CONTA4.NORMAL,
        idade: 31 
    },
]

function ordenaLista(lista: Pessoa4[]): Pessoa4[] {
    const copiaLista = [...lista]
    const resultado: Pessoa4[] = copiaLista.sort((a: Pessoa4, b: Pessoa4) => {
        return a.idade - b.idade
    })

    return resultado
}

console.log(ordenaLista(pessoas4))