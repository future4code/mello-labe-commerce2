import React from "react";
import Home from "./Components/Home"
import Produto from "./Components/Produto"
import Cart from "./Components/Cart"
import {SortList} from "./Components/Filters"
import {FilterList} from "./Components/Filters"

class App extends React.Component {
  state = {
    minimunValue: "",
    maximunValue: "",
    productName: "",
    order: "0",

    produtos: [
      {
        id: 1,
        name: "teste 1",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "teste 2",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        name: "teste 3",
        value: 700.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        name: "teste 4",
        value: 650.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 5,
        name: "teste 5",
        value: 350.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 6,
        name: "teste 6",
        value: 750.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 7,
        name: "teste 7",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 8,
        name: "teste 8",
        value: 12000.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ]
  };

  onChangeMinimunValue = event => {
    this.setState({ minimunValue: event.target.value });
  };

  onChangeMaximunValue = event => {
    this.setState({ maximunValue: event.target.value });
  };

  onChangeProductName = event => {
    this.setState({ productName: event.target.value });
  };

  onChangeOrder = event => {
    this.setState({ order: event.target.value });
  };

  render() {
    // criar Array de Produto.js

    // Carrinho

    const filteredList = FilterList(this.state.produtos, this.state.maximunValue, this.state.minimunValue, this.state.productName);
    const sortedList = SortList(filteredList, this.state.order);

    console.log(sortedList);
    // converter o Array "sortedList" em produtos

    const Carrinho = <Produto name="teste" value="500" imageURL="https://picsum.photos/200/200"/>;

    return (
      <div>
        <Home></Home>
        <Cart/>
        <h2>teste</h2>
        <input
          value={this.state.minimunValue}
          onChange={this.onChangeMinimunValue}
          placeholder={"Valor Minimo"}
        />
        <input
          value={this.state.maximunValue}
          onChange={this.onChangeMaximunValue}
          placeholder={"Valor Maximo"}
        />
        <input
          value={this.state.productName}
          onChange={this.onChangeProductName}
          placeholder={"Nome Produto"}
        />
        <select onChange={this.onChangeOrder}>
          <option value="0">Ordem Crescente</option>
          <option value="1">Ordem Decrescente</option>
        </select>
        <div>{Carrinho}</div>
      </div>
    );
  }
}

export default App;
