import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import productsMock from "./ItemMock";
import "./ItemListContainer.scss";

function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const getItems = new Promise((pass, deni) => {
    pass(productsMock);
  });

  useEffect(() => {
    getItems
      .then((pass) => setListProducts(pass))
      .catch((deni) => console.log(deni));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="grid">
      <ItemList productos={listProducts} />
    </div>
  );
}

export default ItemListContainer;
