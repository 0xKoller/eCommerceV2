import React, { Fragment, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../fireBase";
import "./cart.scss";

// Import de imagenes
import trash from "../../assets/trash.png";
import sad from "../../assets/not-found.png";
import deku from "../../assets/deku.png";
import allmight from "../../assets/allMight.webp";

export const Cart = () => {
  const { items, removeProduct, removeAll } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userContact, setUserContact] = useState(null);
  const [finisher, setFinisher] = useState(true);
  const [update, setUpdate] = useState(false);

  // Calculo el total segun la cantidad de productos
  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotal(currentTotal);
    }
  }, [items]);

  // En este useEffect implemento una verificacion que los datos para habilitar el finalizar compra
  useEffect(() => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userContact)) {
      if (userName && userLastName) {
        setFinisher(false);
      } else {
        setFinisher(true);
      }
    } else {
      setFinisher(true);
    }
  }, [userName, userLastName, userContact]);

  // Eliminar producto
  const handleDeleteItem = (id) => {
    removeProduct(id);
  };

  // Handle de la carga de datos a firebase y resto de logica
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
        name: userName,
        lastName: userLastName,
        phone: userContact,
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
      .catch((error) => console.log(error()))
      .finally(() => {
        setUpdate(true);
        removeAll();
      });
  };

  // Compra Finalizada
  if (update) {
    return (
      <div className="orderSuccesfull">
        <img src={deku} alt="Deku Feliz" />
        <h1>¡Felicidades!</h1>
        <p>
          Su orden de compra es la siguiente: <strong>{orderCreatedId}</strong>
        </p>
        <img src={allmight} alt="All might observandote" />
        <Link to="/" className="goBack">
          ¿Volemos a la tienda? 🤔
        </Link>
      </div>
    );
  }

  // Verifico si el carrito no tiene items
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

  // Panel de compra
  return (
    <div className="cartPanel">
      <h1>Cart</h1>
      <div className="data">
        <div className="buyer">
          <form className="userData">
            <div className="NyA">
              <label>Nombre: </label>
              <input
                placeholder="Pepito"
                value={userName}
                onInput={(e) => setUserName(e.target.value)}
              />
              <label>Apellido: </label>
              <input
                placeholder="Sanchez"
                value={userLastName}
                onInput={(e) => setUserLastName(e.target.value)}
              />
            </div>
            <div className="contact">
              <label> Email:</label>
              <input
                placeholder="pepito@gmail.com"
                type="email"
                value={userContact}
                onInput={(e) => setUserContact(e.target.value)}
              ></input>
            </div>
          </form>
        </div>
        <div className="products">
          <div className="cartContainer">
            <ul>
              {items.map(({ item, quantity }) => (
                <li
                  key={item.id}
                  style={{ listStyle: "square", margin: "0.5em" }}
                >
                  {item.title} - Cantidad: {quantity}
                  <button onClick={() => handleDeleteItem(item.id)}>
                    <img className="trash" src={trash} alt="Cesto de basura" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
              <button
                className="finishButton"
                onClick={handleFinishPurchase}
                disabled={finisher}
              >
                Finalizar compra
              </button>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
