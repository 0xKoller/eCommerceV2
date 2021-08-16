import { useState } from "react";
import { Card } from "react-bootstrap";
import { ItemDetailContainer } from "./ItemDetail/ItemDetailContainer";

export const Item = ({ producto }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Card style={{ width: "15rem" }} onClick={() => setModalIsOpen(true)}>
        <Card.Img src={producto.pictureUrl} alt="foto" />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
        </Card.Body>
      </Card>
      {modalIsOpen ? (
        //ACA ES DONDE TE QUEDASTE, EN LOS OTROS ARCHIVOS DONDE DEJASTE SOLO modalIsOpen VERIFICAR
        //SI ES setModalIsOpen CON EL GIT ORIGINAL
        <ItemDetailContainer setModalIsOpen={setModalIsOpen} />
      ) : null}
    </>
  );
};

export default Item;
