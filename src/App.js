import React from "react";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import { SortList } from "./Components/Filters"
import { FilterList } from "./Components/Filters"
import { FilterCart } from "./Components/Cart"
import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import { FilterStyles, InputFilter, SelectFilter, Container, MainContent } from './Components/styles';

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
  state = {
    minimunValue: "",
    maximunValue: "",
    productName: "",
    order: "0",

    produtos: [
      {
        id: 1,
        name: "Camiseta Nasa",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?=a1",
        cart: 0
      },
      {
        id: 2,
        name: "Camiseta Galáxia",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200?=a2",
        cart: 0
      },
      {
        id: 3,
        name: "Camiseta Universo",
        value: 700.0,
        imageUrl: "https://picsum.photos/200/200?=a3",
        cart: 0
      },
      {
        id: 4,
        name: "Foguete miniatura",
        value: 650.0,
        imageUrl: "https://picsum.photos/200/200?=a4",
        cart: 0
      },
      {
        id: 5,
        name: "Caneca Nasa",
        value: 350.0,
        imageUrl: "https://picsum.photos/200/200?=a5",
        cart: 0
      },
      {
        id: 6,
        name: "Lua miniatura",
        value: 750.0,
        imageUrl: "https://picsum.photos/200/200?=a6",
        cart: 0
      },
      {
        id: 7,
        name: "Caneta Nasa",
        value: 50.0,
        imageUrl: "https://picsum.photos/200/200?=a7",
        cart: 0
      },
      {
        id: 8,
        name: "Traje Astronauta",
        value: 22000.0,
        imageUrl: "https://picsum.photos/200/200?=a8",
        cart: 0
      },
      {
        id: 9,
        name: "Capacete Astronauta",
        value: 3000.0,
        imageUrl: "https://picsum.photos/200/200?=a9",
        cart: 0
      },
      {
        id: 10,
        name: "Nave miniatura",
        value: 32000.0,
        imageUrl: "https://picsum.photos/200/200?=a10",
        cart: 0
      }
    ],

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
    const newProducts = this.state.produtos.map((item) => {
      if (item.id === id) {
        item.cart++;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ produtos: newProducts })

    console.log("oi")
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

  render() {
    const filteredList = FilterList(this.state.produtos, this.state.maximunValue, this.state.minimunValue, this.state.productName);
    const sortedList = SortList(filteredList, this.state.order);

    const carrinho = FilterCart(this.state.produtos);

    return (
      <Container>
        <GlobalStyle />
        <Header />
        <MainContent>
          <FilterStyles>
            <h3>Filters</h3>
            <InputFilter
              value={this.state.minimunValue}
              onChange={this.onChangeMinimunValue}
              placeholder={"Valor Minimo"}
            />
            <InputFilter
              value={this.state.maximunValue}
              onChange={this.onChangeMaximunValue}
              placeholder={"Valor Maximo"}
            />
            <InputFilter
              value={this.state.productName}
              onChange={this.onChangeProductName}
              placeholder={"Nome Produto"}
            />
            <SelectFilter onChange={this.onChangeOrder}>
              <option value="0">Ordem Crescente</option>
              <option value="1">Ordem Decrescente</option>
            </SelectFilter >
            <Cart products={carrinho} RemoveFromCart={this.RemoveFromCart}></Cart>
          </FilterStyles>
          <Home products={sortedList} addToCart={this.addToCart}></Home>
        </MainContent>
      </Container>
    );
  }
}

export default App;
