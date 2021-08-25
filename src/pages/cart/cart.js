import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import "./cart.scss";

export const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);

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
            <Button
              onClick={() => removeProduct(product)}
              className="cartProductDelete"
            >
              XXXXX
            </Button>
          </div>
        ))
      ) : (
        <h1>No hay items en el carrito</h1>
      )}
    </div>
  );
};
