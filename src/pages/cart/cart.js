import React, { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import NumberFormat from "react-number-format";
import trash from "../../assets/trash.png";
import "./cart.scss";
import sad from "../../assets/not-found.png";
import { getFirestore } from "../../fireBase";

export const Cart = () => {
  const { items, removeProduct } = useContext(CartContext);
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

  const handleDeleteItem = (id) => {
    removeProduct(id);
  };

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

    orders
      .add(newOrder)
      .then((response) => {
        console.log("response", response);
        items.forEach(({ item, quantity }) => {
          const docRef = db.collection("items").doc(item.id);
          batch.update(docRef, { stock: item.stock - quantity });
        });
        batch.commit();
        setOrderCreatedId(response.id);
      })
      .catch((error) => console.log(console.error()));
  };

  if (items.length === 0) {
    return (
      <div className="noItems">
        <img
          src={sad}
          className="noItemsImg"
          alt="L triste porque no hay elementos en el carrito"
        />
        <h2>¡Ve a la tienda a buscar algunos productos! 😄 </h2>
      </div>
    );
  }

  return (
    <div className="cartPanel">
      <h1>Cart</h1>
      <div className="cartContainer">
        <ul>
          {items.map(({ item, quantity }) => (
            <li key={item.id} style={{ listStyle: "square", margin: "0.5em" }}>
              {item.title} - Cantidad: {quantity}
              <button onClick={() => handleDeleteItem(item.id)}>
                <img className="trash" src={trash} alt="Cesto de basura" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="totalAndButtonPosition">
        <div className="totalAndButton">
          {items.length > 0 && (
            <Fragment>
              <h2>
                Total:{" "}
                <NumberFormat
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h2>

              <button onClick={handleFinishPurchase}>Finalizar compra</button>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
