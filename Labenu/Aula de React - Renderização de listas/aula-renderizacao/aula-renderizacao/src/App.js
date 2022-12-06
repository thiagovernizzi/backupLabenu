import React from "react";
import Exercicio1 from "./components/Exercicio1";
import Exercicio2 from "./components/Exercicio2";
import Exercicio3 from "./components/Exercicio3";

const listaDeNumeros = [1, 2, 3, 4, 5]

class App extends React.Component {

  montarListaDeItens = () => {
    const listaDeItens = listaDeNumeros.map((numero) => {
      return <li>{numero}</li>
    })

    return listaDeItens
  }

  render() {
    return (
      <div>
        {/* <h1>Está funcionando</h1>

        {this.montarListaDeItens()} */}

        {/* <Exercicio1 /> */}
        {/* <Exercicio2 /> */}
        <Exercicio3 />
      </div>
    )
  }
}


export default App;
