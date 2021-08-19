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
      <h2 className="itemTitle">{product.title}</h2>
      <p className="itemDescription">{product.description}</p>
      <div>
        <span className="itemPrice">$ {product.price}</span>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      </div>
      <Link to="/">Volver a la tienda!</Link>
    </div>
  );
};
