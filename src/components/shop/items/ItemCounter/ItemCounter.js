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
    <>
      <div className="counterContainer">
        <button className="decrease" onClick={decrease}>
          {" "}
          -{" "}
        </button>
        <p className="counterText">{counter}</p>
        <button className="increase" onClick={increase}>
          {" "}
          +{" "}
        </button>
      </div>
    </>
  );
}

export default ItemCount;
