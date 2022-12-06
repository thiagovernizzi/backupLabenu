function criarArrayNomesAnimais() {
    // Escreva seu código aqui
       const animais = [
         { nome: "Cachorro", classificacao: "mamífero" },
         { nome: "Papagaio", classificacao: "ave" },
         { nome: "Gato", classificacao: "mamífero" },
         { nome: "Carpa", classificacao: "peixe" },
         { nome: "Pomba", classificacao: "ave" }
       ]
       const nomesAnimais = animais.map((animal) =>{
        return animal.nome
   })
   }
   console.log(nomesAnimais)