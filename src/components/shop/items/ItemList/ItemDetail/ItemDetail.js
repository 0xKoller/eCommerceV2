import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../context/cartContext";
import { getFirestore } from "../../../../../fireBase";
import { useParams } from "react-router";
import ItemCount from "../../ItemCounter/ItemCounter";
import "./ItemDetail.scss";

const FROM = 1;

export const ItemDetail = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [finisher, setFinisher] = useState(false);
  const { addProduct, items } = useContext(CartContext);
  const [item, setItem] = useState(null);

  const handleItemToCart = () => {
    addProduct({ item, qty });
  };

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const currentItem = itemCollection.doc(id);
    currentItem.get().then((document) => {
      if (!document.exists) {
        console.log("No existe el item");
        return;
      }
      setItem({ id: document.id, ...document.data() });
    });
  }, [id]);

  useEffect(() => {
    if (items.length > 0 && item) {
      const isDisabled = items.some(
        (currentItem) => currentItem.item.id === item.id
      );
      setFinisher(isDisabled);
    }
  }, [items, item]);

  return (
    <div className="itemDetailWrapper">
      <img src={product.image} alt="Imagen del Producto" className="itemImg" />
      <div className="itemProps">
        <h2 className="itemTitle">{product.title}</h2>
        <p className="itemDescription">{product.description}</p>
        <div className="counterPriceBox">
          <div className="counterPriceContainer">
            <p className="itemPrice">$ {product.price}</p>
            <ItemCount
              counter={qty}
              from={FROM}
              setCounter={setQty}
              to={item.stock}
            />
          </div>
        </div>
      </div>
      {finisher ? (
        <Link className="goCart" to="/cart" onClick={handleItemToCart}>
          ¡Ir al carrito 🛒!
        </Link>
      ) : null}
      <Link className="goBack" to="/" onClick={() => setQty(0)}>
        Volver a la tienda!
      </Link>
    </div>
  );
};
