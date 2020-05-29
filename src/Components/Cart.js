import React from 'react';

export function FilterCart (list) {
    return list.filter(
        produto => produto.cart
    );
}

function Cart(props)
{
    let cartTotal = 0;

    const cartElements = props.products.map(product =>{
        cartTotal+= product.value;
        return (
            <div key={product.name}>
                <h4>{product.name}</h4>
                <p>{product.value}</p>
                <button onClick={() => props.RemoveFromCart(product.id)}>Remove From Cart</button>
            </div>
        );
      });
    
      return (
          <div>
            <h1>Cart</h1>
            <h3>Total:{cartTotal}</h3>
            <div>{cartElements}</div>
          </div>
      );
}

export default Cart;