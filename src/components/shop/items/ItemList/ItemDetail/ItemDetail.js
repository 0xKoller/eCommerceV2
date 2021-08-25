import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../context/cartContext";
import ItemCount from "../../ItemCounter/ItemCounter";
import "./ItemDetail.scss";

export const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const [finisher, setFinisher] = useState(false);
  const { addProduct } = useContext(CartContext);

  const finishShopping = () => {
    addProduct(product.id, product.title, product.price, qty);
  };

  const onAdd = (amount) => {
    setQty(amount);
  };

  useEffect(() => {
    if (qty !== 0) {
      setFinisher(true);
    }
  }, [qty]);

  return (
    <div className="itemDetailWrapper">
      <img
        src={product.pictureUrl}
        alt="Imagen del Producto"
        className="itemImg"
      />
      <div className="itemProps">
        <h2 className="itemTitle">{product.title}</h2>
        <p className="itemDescription">{product.description}</p>
        <div className="counterPriceBox">
          <div className="counterPriceContainer">
            <p className="itemPrice">$ {product.price}</p>
            <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
          </div>
        </div>
      </div>

      {finisher ? (
        <Link
          className="goCart"
          to="/cart"
          onClick={() => {
            finishShopping();
          }}
        >
          ¡Ir al carrito 🛒!
        </Link>
      ) : null}
      <Link className="goBack" to="/cart" onClick={() => setQty(0)}>
        Volver a la tienda!
      </Link>
    </div>
  );
};
