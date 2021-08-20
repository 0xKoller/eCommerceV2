import { Link } from "react-router-dom";
import ItemCount from "../../ItemCounter/ItemCounter";
import "./ItemDetail.scss";

export const ItemDetail = ({ product }) => {
  const onAdd = (amount) => {
    alert(`Agregaste ${amount} al carrito`);
  };
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
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
      <Link className="goBack" to="/">
        Volver a la tienda!
      </Link>
    </div>
  );
};
