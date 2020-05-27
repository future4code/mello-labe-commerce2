import React from "react";
import Home from "./Components/Home"

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
        estaCarrinho: false
      },
      {
        id: 2,
        name: "teste 2",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 3,
        name: "teste 3",
        value: 700.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 4,
        name: "teste 4",
        value: 650.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 5,
        name: "teste 5",
        value: 350.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 6,
        name: "teste 6",
        value: 750.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 7,
        name: "teste 7",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      },
      {
        id: 8,
        name: "teste 8",
        value: 12000.0,
        imageUrl: "https://picsum.photos/200/200",
        estaCarrinho: false
      }
    ]
  };

  onChangeMinimunValue = event => {
    this.setState({ minimunValue: event.target.value });
  };

  onChangeMaxmunValue = event => {
    this.setState({ maximunValue: event.target.value });
  };

  onChangeProductName = event => {
    this.setState({ productName: event.target.value });
  };

  onChangeOrder = event => {
    this.setState({ order: event.target.value });
  };

  FilterList(list) {
    let deltaList = list;

    if (this.state.maximunValue !== "")
      deltaList = list.filter(
        produto => produto.value < this.state.maximunValue
      );

    if (this.state.minimunValue !== "")
      deltaList = deltaList.filter(
        produto => produto.value > this.state.minimunValue
      );

    if (this.state.productName !== "")
      deltaList = deltaList.filter(
        produto => produto.name === this.state.productName
      );

    return deltaList;
  }

  compare(a, b) {
    const valueA = a.value;
    const valueB = b.value;

    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  }

  SortList(list) {
    let deltaList = list;

    deltaList.sort(this.compare);

    return this.state.order === "0" ? deltaList : deltaList.reverse();
  }

  render() {
    // criar Array de Produto.js

    // Carrinho

    const filteredList = this.FilterList(this.state.produtos);
    const sortedList = this.SortList(filteredList);

    console.log(sortedList);

    // converter o Array "sortedList" em produtos

    return (
      <div>
        <h2>Teste</h2>
      </div>
    );
  }
}

export default App;
