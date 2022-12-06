// O map com filter é utilizado para gerar uma nova lista derivada da original, com dados trabalhados no map, para aí sim ser filtrada a partir dos mesmos. Por exemplo, no exercício 6 temos que mapear a lista para abater os débitos do saldo e aí sim filtrar as contas com saldo negativo.
// No código abaixo temos um exemplo genérico de função que recebe uma lista de pessoas e retorna uma nova lista de pessoas com saldo diário de gorjetas igual ou maior que 250.
// O número 3 em CONTA, Pessoa, pessoas e filtraLista é para burlar uma limitação do typescript de não poder repetir o mesmo nome mesmo em arquivos diferentes. Esse é o arquivo 3 então deixei 3 nos nomes para diferenciar dos outros arquivos.

type Pessoa3 = {
  nome: string;
  saldoDoDia: number;
  gorjetas: number[];
};

const pessoas3: Pessoa3[] = [
  {
    nome: "astrodev",
    saldoDoDia: 150,
    gorjetas: [25, 15, 10],
  },
  {
    nome: "bananinha",
    saldoDoDia: 50,
    gorjetas: [20, 15, 15],
  },
  {
    nome: "fulano",
    saldoDoDia: 0,
    gorjetas: [50, 20, 40],
  },
  {
    nome: "ciclana",
    saldoDoDia: 30,
    gorjetas: [100, 120, 50],
  },
];

function filtraLista3(lista: Pessoa3[]): Pessoa3[] {
  const listaAtualizada = lista.map((item: Pessoa3) => {
    let saldoAtualizado = 0;

    for (let gorjeta of item.gorjetas) {
      saldoAtualizado += gorjeta;
    }

    const pessoaComSaldoAtualizado: Pessoa3 = {
      nome: item.nome,
      saldoDoDia: item.saldoDoDia + saldoAtualizado,
      gorjetas: [],
    };

    return pessoaComSaldoAtualizado;
  });

  const resultado: Pessoa3[] = listaAtualizada.filter((item: Pessoa3) => {
    return item.saldoDoDia >= 200;
  });

  return resultado;
}

console.log(filtraLista3(pessoas3));
