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
  );
}

export default Home;
