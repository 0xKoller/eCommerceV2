import "./App.scss";
import Router from "./router/Router";
import { CartContext } from "./context/cartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={cart}>
        <Router />
      </CartContext.Provider>
    </>
  );
}

export default App;
