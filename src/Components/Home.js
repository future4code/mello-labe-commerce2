import React from 'react';
import Produto from "./Produto"

function Home(props) {

  const homeElements = props.products.map(product =>{
    return (
        <div key={product.id + product.name}>
            <Produto id={product.id} name={product.name} value={product.value} imageUrl={product.imageUrl} addToCart={props.addToCart}></Produto>
        </div>
    );
  });

  return (
      <div>
        <h1>Products</h1>
        <div>{homeElements}</div>
      </div>
  );
}

export default Home;
