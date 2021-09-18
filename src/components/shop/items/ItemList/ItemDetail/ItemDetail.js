import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { CartContext } from "../../../../../context/cartContext";
import { getFirestore } from "../../../../../fireBase";
import ItemCount from "../../ItemCounter/ItemCounter";
import Loading from "../../../../loading/loading";
import "./ItemDetail.scss";

const FROM = 1;

export const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [finisher, setFinisher] = useState(false);
  const { addItem, items } = useContext(CartContext);
  const [item, setItem] = useState(null);
  const history = useHistory();

  const handleItemToCart = () => {
    addItem({ item, quantity });
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

  if (!item) return <Loading />;

  return (
    <div className="itemDetailWrapper">
      <img src={item.image} alt="Imagen del Producto" className="itemImg" />
      <div className="itemProps">
        <h2 className="itemTitle">{item.title}</h2>
        <p className="itemDescription">{item.description}</p>
        <div className="counterPriceBox">
          <div className="counterPriceContainer">
            <p className="itemPrice">$ {item.price}</p>
            <ItemCount
              counter={quantity}
              from={FROM}
              setCounter={setQuantity}
              to={item.stock}
            />
          </div>
        </div>
      </div>
      <button className="goCart" disabled={finisher} onClick={handleItemToCart}>
        ¡Agregar al carrito 🛒!
      </button>
      <button className="goBack" onClick={() => history.goBack()}>
        Volver atras!
      </button>
    </div>
  );
};
