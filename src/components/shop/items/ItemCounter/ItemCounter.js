import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCounter.scss";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <div className="counterContainer">
        <div className="buttons">
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
        <Link className="finishShopping" onClick={() => onAdd(counter)}>
          Añadir al carrito!
        </Link>
      </div>
    </>
  );
}

export default ItemCount;
