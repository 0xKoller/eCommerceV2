import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import productsMock from "../ItemMock";

export const ItemDetailContainer = ({ setModalIsOpen }) => {
  const [product, setProduct] = useState({});
  const getItem = new Promise((pass, deni) => {
    setTimeout(function () {
      pass(productsMock);
    }, 2000);
  });
  useEffect(() => {
    getItem.then((pass) => setProduct(pass)).catch((deni) => console.log(deni));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ItemDetail product={product} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
