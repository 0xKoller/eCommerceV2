import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (id, name, price, qty) => {
    const existingIndex = cart.findIndex((item) => item.id === id);

    if (existingIndex >= 0) {
      cart[existingIndex] = {
        ...cart[existingIndex],
        qty: cart[existingIndex].qty + qty,
      };
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: name,
          price: price,
          qty: qty,
        },
      ]);
    }
  };
  const removeProduct = (itemInCart) => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ addProduct, cart, setCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
