import React from "react";

class App extends React.Component {
  state = {
    email: "",
    senha: ""
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeSenha = (event) => {
    this.setState({ senha: event.target.value });
  };

  login = (event) => {
    // Comentário: essa linha abaixo serve para evitar o recarregamento da página ao clicar em um botão dentro de um form
    event.preventDefault();

    const body = {
      email: this.state.email,
      password: this.state.senha
    };

    // Comentário: fazemos o console.log aqui, mas em um caso real iríamos enviar os dados em uma requisição para o backend
    console.log(body);
  };

  render() {
    return (
      <main>
        {/* Comentário: se usar o form podemos deixar a chamada da função aqui no onSubmit */}
        <form onSubmit={this.login}>
          {/* Comentário: forma implícita de acessibilidade com label */}
          <label>
            email
            <input
              value={this.state.email}
              onChange={this.onChangeEmail}
              type="text"
              name="email"
            />
          </label>

          {/* Comentário: forma explícita de acessibilidade com label */}
          <label htmlFor="senha">senha</label>
          <input
            value={this.state.senha}
            onChange={this.onChangeSenha}
            type="password"
            name="senha"
            id="senha"
          />

          {/* Comentário: por estar dentro de um form, o button será do tipo submit e não precisa do onClick */}
          <button type="submit">Entrar</button>
        </form>
      </main>
    );
  }
}

export default App;