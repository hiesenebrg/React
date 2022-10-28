import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <p style={{paddingLeft:20 , marginBottom:-30 }}>
            <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
          </p>
          
        )
      })}
    </div>
  );
}

export default Cart;