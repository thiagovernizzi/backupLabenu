// Normalmente filtramos arrays de objetos, analisando suas propriedades para saber quais objetos continuarão na nova lista.
// No código abaixo temos um exemplo genérico de função que recebe uma lista de pessoas e retorna uma nova lista de pessoas com conta normal e idade maior que 30. 
// O número 1 em CONTA, Pessoa, pessoas e filtraLista é para burlar uma limitação do typescript de não poder repetir o mesmo nome mesmo em arquivos diferentes. Esse é o arquivo 1 então deixei 1 nos nomes para diferenciar dos outros arquivos.

enum CONTA1 {
    NORMAL = "normal",
    ADMIN = "admin"
}

type Pessoa1 = {
    id: number,
    nome: string,
    conta: CONTA1,
    idade: number
}

const pessoas1: Pessoa1[] = [
    {
        id: 1,
        nome: "astrodev",
        conta: CONTA1.ADMIN,
        idade: 45 
    },
    {
        id: 2,
        nome: "bananinha",
        conta: CONTA1.NORMAL,
        idade: 22 
    },
    {
        id: 3,
        nome: "fulano",
        conta: CONTA1.NORMAL,
        idade: 35 
    },
    {
        id: 4,
        nome: "ciclana",
        conta: CONTA1.NORMAL,
        idade: 31 
    },
]

function filtraLista1(lista: Pessoa1[]): Pessoa1[] {
    const resultado: Pessoa1[] = lista.filter((item: Pessoa1) => {
        const primeiraCondicao = item.conta === CONTA1.NORMAL
        const segundaCondicao = item.idade >= 30
        return primeiraCondicao && segundaCondicao
    })

    return resultado
}

console.log(filtraLista1(pessoas1))