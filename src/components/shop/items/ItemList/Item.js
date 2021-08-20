import { Card } from "react-bootstrap";
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
        <Card style={{ width: "16rem" }}>
          <Card.Img src={producto.pictureUrl} alt="foto" />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Item;
