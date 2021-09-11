import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import trash from "../../assets/trash.png";
import "./cart.scss";
import sad from "../../assets/not-found.png";
import { getFirestore } from "../../fireBase";

export const Cart = () => {
  const { items } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);

  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotal(currentTotal);
    }
  }, [items]);

  const handleFinishPurchase = () => {
    const newItems = items.map(({ item, quantity }) => ({
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
      },
      quantity,
    }));
    console.log("newItems", newItems);
    const newOrder = {
      buyer: {
        name: "Jose Luis Koller",
        phone: "2995763898",
        email: "leo@leo.com",
      },
      items: newItems,
      total,
    };
    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();
  };

  return (
    <div className="cartPanel">
      {cart.length ? (
        cart.map((product) => (
          <div key={product.id} className="cartContainer">
            <h2 className="cartProductTitle">{product.name}</h2>
            <h3 className="cartProductQty">Cantidad: {product.qty}</h3>
            <h4 className="cartProductPrice">
              ${calculatePrice(product.price, product.qty)}
            </h4>
            <img
              className="trashCan"
              src={trash}
              alt="#"
              onClick={() => {
                removeProduct(product);
                console.log(product);
              }}
            />
          </div>
        ))
      ) : (
        <div className="noItems">
          <img src={sad} alt="#" className="noItemsImg" />
          <h1>No hay items en el carrito</h1>
        </div>
      )}
    </div>
  );
};
