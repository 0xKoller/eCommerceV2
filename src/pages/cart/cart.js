import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import trash from "../../assets/trash.png";
import "./cart.scss";
import sad from "../../assets/not-found.png";

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

  const calculatePrice = (price, qty) => {
    return price * qty;
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
