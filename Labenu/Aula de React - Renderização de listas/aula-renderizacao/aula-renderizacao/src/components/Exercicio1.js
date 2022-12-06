import React from 'react'
import "./Exercicio1.css"

const listaDePessoas = [
    {
        nome: "Caio",
        idade: 26
    },
    {
        nome: "Chijo",
        idade: 27
    },
    {
        nome: "Laís",
        idade: 28
    },
    {
        nome: "Mandi",
        idade: 29
    }
]

class Exercicio1 extends React.Component {
    render() {
        return (
            <ol className="lista-pessoas">
                {listaDePessoas.map((pessoa) => {
                    return <li>
                        <p>{pessoa.nome}</p>
                        <p className="laranja">{pessoa.idade}</p>
                    </li>
                })}
            </ol>
        )
    }
}

export default Exercicio1