import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const alreadyExist = cartItems.some((cartItem) => cartItem.id === item.id);
    if (alreadyExist) {
      alert("Item already exists in cart");
      return;
    }

    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    alert("Item added to cart!");
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const cartData = {
    addToCart, cartItems
  }

  return(
    <CartContext.Provider value={cartData} >
         {children}
    </CartContext.Provider>
  )

};
