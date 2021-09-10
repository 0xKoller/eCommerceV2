import "./ItemCounter.scss";

function ItemCount({ counter, from, setCounter, to }) {
  const increase = () => {
    if (to === counter) return;
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (from === counter) return;
    setCounter(counter - 1);
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
      </div>
    </>
  );
}

export default ItemCount;
