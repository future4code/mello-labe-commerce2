import React from 'react';
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
