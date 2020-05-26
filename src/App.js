import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
      produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 1",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 2",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 3",
        value: 700.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 4",
        value: 650.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 5",
        value: 350.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 6",
        value: 750.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 7,
        name: "Foguete da Missão Apollo 7",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 8",
        value: 12000.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
    ],
  };

  /*
  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  */

  render() {

    // criar Array de Produto.js

    // Carrinho

    //Filtrar lista usando filtros
      /*
      const listaDeComponentes = this.state.mensagems.map(pessoa => {
        return (
          <MessageStyle>
            <Mensagem key={Date.now()} usuario={pessoa.usuario} texto={pessoa.texto}/>
          </MessageStyle>
        );
      });
      */

    // Organizar lista por ordem crescente/decrescente

    return (
      <div>
        
      </div>
    );
  };
}

export default App;
