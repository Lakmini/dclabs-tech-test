import React, { createContext, useState, useEffect, useContext } from "react";
export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductNotExist = cart.every((item) => {
      return item.name !== product.name;
    });

    if (isProductNotExist) {
      setCart([...cart, product]);
    } else {
      alert("Already Added to the basket");
    }
  };

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("storageCart"));
    if (storageCart) {
      setCart(storageCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storageCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ addToCart, cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
