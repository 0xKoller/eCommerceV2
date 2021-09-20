import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems([...items, item]);
    setItems(newItems);
  };

  const removeProduct = (id) => {
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].item.id !== id) {
        newItems.push(items[i]);
      }
    }
    setItems([...newItems]);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ addItem, items, removeProduct, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};
