import React from 'react'
import "./Exercicio1.css"

class Exercicio3 extends React.Component {
    state = {
        nomeInput: "",
        idadeInput: "",

        listaDePessoas: [
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
    }

    onChangeNome = (event) => {
        this.setState({ nomeInput: event.target.value })
    }

    onChangeIdade = (event) => {
        this.setState({ idadeInput: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault()

        const novaListaDePessoas = [...this.state.listaDePessoas]
        novaListaDePessoas.push({
            nome: this.state.nomeInput,
            idade: this.state.idadeInput
        })

        this.setState({ listaDePessoas: novaListaDePessoas })
    }

    deletaPessoa = (nomeASerDeletado) => {
        const novaListaDePessoas = this.state.listaDePessoas.filter((pessoa) => {
            return pessoa.nome !== nomeASerDeletado
        })

        this.setState({ listaDePessoas: novaListaDePessoas })
    }

    render() {
        return (
            <main>
                <form onSubmit={this.onSubmitForm}>
                    <label>
                        <input
                            name="Nome"
                            placeholder="Nome"
                            value={this.state.nomeInput}
                            onChange={this.onChangeNome}
                        />
                    </label>

                    <label>
                        <input
                            name="Idade"
                            placeholder="Idade"
                            value={this.state.idadeInput}
                            onChange={this.onChangeIdade}
                        />
                    </label>

                    <button>Adicionar</button>
                </form>

                <ol className="lista-pessoas">
                    {this.state.listaDePessoas.map((pessoa) => {
                        return <li key={pessoa.nome}>
                            <p>{pessoa.nome}</p>
                            <p className="laranja">{pessoa.idade}</p>
                            <button onClick={() => this.deletaPessoa(pessoa.nome)}>Deletar</button>
                        </li>
                    })}
                </ol>
            </main>
        )
    }
}

export default Exercicio3