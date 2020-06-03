import React from 'react';
import { FilterStyles } from './styles';

export function FilterCart(list) {
  return list.filter((produto) => produto.cart);
}

function Cart(props) {
  let cartTotal = 0;

  const cartElements = props.products.map((product) => {
    cartTotal += product.value;
    return (
      <FilterStyles key={product.name}>
        <h4>{product.name}</h4>
        <p>{product.value}</p>
        <button onClick={() => props.RemoveFromCart(product.id)}>
          Remove From Cart
        </button>
      </FilterStyles>
    );
  });

  return (
    <FilterStyles>
      <h2>Cart</h2>
      <h3>Total: {cartTotal}</h3>
      <div>{cartElements}</div>
    </FilterStyles>
  );
}

export default Cart;
