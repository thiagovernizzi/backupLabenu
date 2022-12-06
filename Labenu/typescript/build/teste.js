// RESPOSTA 1
// const itens = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
// ];
// function ordenaEstoque(itens) {
//     const itensComValorAtualizado = itens.map((item) => {
//         const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
//         const itensAtualizados = {
//             nome: item.nome,
//             quantidade: item.quantidade,
//             valorUnitario: "R$" + valorAtualizado,
//         };
//         return itensAtualizados;
//     });
//     const resultado = itensComValorAtualizado.sort((a, b) => {
//         if (a.quantidade < b.quantidade)
//             return -1;
//         if (a.quantidade > b.quantidade)
//             return 1;
//     })

//     return resultado;
// }
// console.log(ordenaEstoque(itens));

// RESPOSTA 2
// const itens = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
// ];
// function ordenaEstoque(itens) {
//     const itensComValorAtualizado = itens.map((item) => {
//         const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
//         const itensAtualizados = {
//             nome: item.nome,
//             quantidade: item.quantidade,
//             valorUnitario: "R$" + valorAtualizado,
//         };
//         return itensAtualizados;
//     });
//     const resultado = itensComValorAtualizado.sort((a, b) => {
//         return a.quantidade < b.quantidade ? -1 : a.quantidade > b.quantidade ? 1 : 0 // mudei apenas essa parte
//     })

//     return resultado;
// }
// console.log(ordenaEstoque(itens));

// RESPOSTA 3
const itens = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];
function ordenaEstoque(itens) {
    const itensComValorAtualizado = itens.map((item) => {
        const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
        const itensAtualizados = {
            nome: item.nome,
            quantidade: item.quantidade,
            valorUnitario: "R$" + valorAtualizado,
        };
        return itensAtualizados;
    });
    const compare = (a, b) => {
        if (a.quantidade < b.quantidade)
            return -1;
        if (a.quantidade > b.quantidade)
            return 1;
        return 0;
    };
    return itensComValorAtualizado.sort(compare);
}
console.log(ordenaEstoque(itens));

