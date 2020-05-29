import React from 'react';


function Produto (props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt=""/>
            <p> {props.value}</p>
            <button onClick={() => props.addToCart(props.id)}>AddToCart</button>
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

