
import React from "react";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import {SortList} from "./Components/Filters"
import {FilterList} from "./Components/Filters"
import {FilterCart} from "./Components/Cart"

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
        cart: false
      },
      {
        id: 2,
        name: "teste 2",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200",
        cart: false
      },
      {
        id: 3,
        name: "teste 3",
        value: 700.0,
        imageUrl: "https://picsum.photos/200/200",
        cart: false
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
        cart: false
      },
      {
        id: 6,
        name: "teste 6",
        value: 750.0,
        imageUrl: "https://picsum.photos/200/200",
        cart: false
      },
      {
        id: 7,
        name: "teste 7",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200",
        cart: false
      },
      {
        id: 8,
        name: "teste 8",
        value: 12000.0,
        imageUrl: "https://picsum.photos/200/200",
        cart: false
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

  addToCart = (id) => {
    console.log(this.state.products);
  }

  addToCart = (id) => {
    this.setState(state => {
      const newProducts = state.produtos.map((item) => {
        if (item.id === id) {
          item.cart = true;
          return item;
        } else {
          return item;
        }
      });
 
      return {
        newProducts,
      };
    });
  };

  RemoveFromCart = (id) => {
    this.setState(state => {
      const newProducts = state.produtos.map((item) => {
        if (item.id === id) {
          item.cart = false;
          return item;
        } else {
          return item;
        }
      });
 
      return {
        newProducts,
      };
    });
  };

import React from 'react';
import Home from './Components/Home';
import { Container, MainContent } from './Components/styles';
import FilterTable from './Components/FilterTable';
import Header from './Components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


class App extends React.Component {
  render()
    const filteredList = FilterList(this.state.produtos, this.state.maximunValue, this.state.minimunValue, this.state.productName);
    const sortedList = SortList(filteredList, this.state.order);

    const carrinho = FilterCart(this.state.produtos);

    return (
      <div>
        <Home products={sortedList} addToCart={this.addToCart}></Home>
        <section className="Filters">
          <h1>Filters</h1>
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
        </section>
        <Cart products={carrinho} RemoveFromCart={this.RemoveFromCart}></Cart>
      </div>

    return (
      <Container>
        <GlobalStyle />
        <Header />
        <MainContent>
          <FilterTable />
          <Home />
        </MainContent>
      </Container>

    );
  }
}

export default App;
