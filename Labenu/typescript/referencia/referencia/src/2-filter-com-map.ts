// O filtro com map é utilizado para gerar uma nova lista filtrada, porém com uma estrutura diferente da original. Por exemplo, no exercício 5 temos que filtrar a lista e retornar apenas o email de cada objeto. Isso vai transformar a lista gerada em uma lista de strings, diferente da original que é uma lista de objetos.
// No código abaixo temos um exemplo genérico de função que recebe uma lista de pessoas e retorna uma nova lista somente com os nomes das pessoas com conta normal e idade maior que 30.
// O número 2 em CONTA, Pessoa, pessoas e filtraLista é para burlar uma limitação do typescript de não poder repetir o mesmo nome mesmo em arquivos diferentes. Esse é o arquivo 2 então deixei 2 nos nomes para diferenciar dos outros arquivos.

enum CONTA2 {
    NORMAL = "normal",
    ADMIN = "admin"
}

type Pessoa2 = {
    id: number,
    nome: string,
    conta: CONTA2,
    idade: number
}

const pessoas2: Pessoa2[] = [
    {
        id: 2,
        nome: "astrodev",
        conta: CONTA2.ADMIN,
        idade: 45 
    },
    {
        id: 2,
        nome: "bananinha",
        conta: CONTA2.NORMAL,
        idade: 22 
    },
    {
        id: 3,
        nome: "fulano",
        conta: CONTA2.NORMAL,
        idade: 35 
    },
    {
        id: 4,
        nome: "ciclana",
        conta: CONTA2.NORMAL,
        idade: 32 
    },
]

function filtraLista2(lista: Pessoa2[]): string[] {
    const listaFiltrada: Pessoa2[] = lista.filter((item: Pessoa2) => {
        const primeiraCondicao = item.conta === CONTA2.NORMAL
        const segundaCondicao = item.idade >= 30
        return primeiraCondicao && segundaCondicao
    })

    const resultado = listaFiltrada.map((item: Pessoa2) => {
        return item.nome
    })

    return resultado
}

console.log(filtraLista2(pessoas2))