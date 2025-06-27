import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa
        iure, aspernatur numquam non error consequuntur maxime beatae quo,
        perferendis officiis laudantium expedita asperiores dolores distinctio
        saepe, iste repudiandae possimus.
      </p> */}
      {cartItems.map((item, index) => (
       
          <h1 key={index}>{item.price}</h1>
       
      ))}
    </div>
  );
};
