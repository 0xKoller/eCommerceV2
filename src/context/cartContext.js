import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (id, name, price, qty) => {
    const isInCartPosition = cart.findIndex((item) => item.id === id);

    if (isInCartPosition >= 0) {
      cart[isInCartPosition] = {
        ...cart[isInCartPosition],
        qty: cart[isInCartPosition].qty + qty,
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

  const removeProduct = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ addProduct, cart, setCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
