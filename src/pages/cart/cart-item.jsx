import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => addToCart(id, Number(e.target.value))} />
            <button onClick={() => addToCart(id)}> + </button>
        </div>
       </div>
      </div>
  );
};
