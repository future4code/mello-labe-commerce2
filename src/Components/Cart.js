import React from 'react';

export function FilterCart(list) {
    return list.filter(
        produto => produto.cart
    );
}

function Cart(props) {
    let cartTotal = 0;

    const cartElements = props.products.map(product => {
        cartTotal += product.value * product.cart;
        return (
            <div key={product.name}>
                <h4>{product.name}{product.cart}</h4>
                <p>{product.value * product.cart}</p>
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