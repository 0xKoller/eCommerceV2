import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import trash from "../../assets/trash.png";
import "./cart.scss";

export const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);

  const calculatePrice = (price, qty) => {
    console.log(price * qty);
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
        <h1>No hay items en el carrito</h1>
      )}
    </div>
  );
};
