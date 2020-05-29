import React from 'react';

import Produto from "./Produto"
import {
  ProductsCatalog,
  ProductCard,
} from './styles';


function Home(props) {

  const homeElements = props.products.map(product =>{
    return (
        <ProductCard key={product.id + product.name}>
            <Produto id={product.id} name={product.name} value={product.value} imageUrl={product.imageUrl} addToCart={props.addToCart}></Produto>
        </ProductCard>
    );
  });

  return (

      <>
        <ProductsCatalog>{homeElements}</ProductsCatalog>
      </>

      <div>
        <h1>Products</h1>
        <div>{homeElements}</div>
      </div>

import {
  ProductsCatalog,
  ProductCard,
  ButtonAddBasket,
  ProductDescription,
} from './styles';

//const quantidadeProdutos = ['Quantidade de produtos:'];

let carrinho = [];

function Home() {
  function handleClick(e) {
    carrinho.push(listaDeProdutos[e]);
  }
  const listaDeProdutos = [
    <ProductCard>
      <ProductDescription>item1</ProductDescription>
      <ButtonAddBasket>Adicionar ao carrinho</ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item2</ProductDescription>
      <ButtonAddBasket>Adicionar ao carrinho</ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item3</ProductDescription>
      <ButtonAddBasket>Adicionar ao carrinho</ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item4</ProductDescription>
      <ButtonAddBasket>Adicionar ao carrinho</ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item5</ProductDescription>
      <ButtonAddBasket>Adicionar ao carrinho</ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item6</ProductDescription>
      <ButtonAddBasket onClick={() => handleClick(1)}>
        Adicionar ao carrinho
      </ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item7</ProductDescription>
      <ButtonAddBasket onClick={() => handleClick(1)}>
        Adicionar ao carrinho
      </ButtonAddBasket>
    </ProductCard>,
    <ProductCard>
      <ProductDescription>item8</ProductDescription>
      <ButtonAddBasket onClick={() => handleClick(1)}>
        Adicionar ao carrinho
      </ButtonAddBasket>
    </ProductCard>,
  ];
  return (
    <>
      <ProductsCatalog>{listaDeProdutos}</ProductsCatalog>
    </>


  );
}

export default Home;
