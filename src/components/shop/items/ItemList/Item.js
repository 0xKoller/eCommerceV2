import { Link } from "react-router-dom";
import "./Item.scss";

export const Item = ({ producto }) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${producto.id}`}
        className="productLink"
      >
        <div className="card">
          <img className="cardImg" src={producto.pictureUrl} alt="foto" />
          <div className="cardInfo">
            <h5>{producto.title}</h5>
            <p>{producto.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
