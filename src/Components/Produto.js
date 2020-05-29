import React from 'react';
import {
    ButtonAddBasket,
    ProductDescription,
  } from './styles';
  


function Produto (props) {

    return (
        <div>
            <ProductDescription>{props.name}</ProductDescription><br/>
            <img src={props.imageUrl} alt=""/><br/>
            <ButtonAddBasket onClick={() => props.addToCart(props.id)}>AddToCart: {props.value}</ButtonAddBasket>
        </div>
    ); 
}

export default Produto;

export function Produto(props) {
  return (
    <p>
      <b>{props.usuario}:</b> {props.texto}
    </p>
  );
}

