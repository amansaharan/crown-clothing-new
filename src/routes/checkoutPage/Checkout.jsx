import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout Page</h1>

      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <span>{quantity}</span>
              <br />
              <span>{name}</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>
                Decrement
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
