import { useState } from "react";
import "./ItemCounter.scss";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(1);

  function decrease() {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  }

  function increase() {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="counter">
      <div className="counterContainer">
        <button className="decrease" onClick={decrease}>
          {" "}
          -{" "}
        </button>
        <div className="counterText">{counter}</div>
        <button className="increase" onClick={increase}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
